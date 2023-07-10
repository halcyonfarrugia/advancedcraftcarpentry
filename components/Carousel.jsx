import { Box, IconButton, useBreakpointValue, Text, VStack } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { useState } from 'react';
import "@fontsource/manrope/700.css"
import "@fontsource/manrope/600.css"


// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '1rem' });

  // These are the images used in the slide
  const cards = [
    {
        url: 'door.jpg',
        name: 'Doors & Frames'
    },
    {
        url: 'decking.jpg',
        name: 'Decking & Handrails'
    },
    {
        url: 'joinery.jpg',
        name: 'Joinery'
    },
    {
        url: 'timberfloors.jpg',
        name: 'Timber Floors & Stairs'
    },
    {
        url: 'bathroom.jpg',
        name: 'Kitchen & Bathroom Renovations'
    },
    {
        url: 'termite-damage.jpg',
        name: 'Termite Damage Repair'
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'full'}
      width={'full'}
      overflow={'hidden'}
      flex={{ base: "1.5", md: "2" }}
      borderRadius="2rem"
      boxShadow="black 0.1rem 0.1rem 2rem">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        bg="white"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        bg="white"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <VStack
            key={index}
            height={{ base: 'xl', sm: '3xl', md: '3xl', lg: '4xl', xl: '5xl' }}
            position="relative"
            backgroundPosition="start"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.url})`}
            borderRadius="2rem"
            fontFamily="Manrope"
            zIndex="2"
            padding="1rem 1.5rem"
            color="white"
          >
            <Text fontWeight="700" color="white" fontSize="2rem" _hover={{ cursor: "pointer", textDecor: "underline"}} textShadow="black 0.25rem 0.25rem 1rem">
                { card.name }
            </Text>
            <Text fontWeight="600" textShadow="black 0.25rem 0.25rem 1rem" _hover={{ cursor: "pointer", textDecor: "underline"}}>
                View More
            </Text>
          </VStack>
        ))}
      </Slider>
    </Box>
  );
}