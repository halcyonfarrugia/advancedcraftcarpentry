import Head from 'next/head'
import "@fontsource/manrope"
import "@fontsource/manrope/700.css"
import { VStack, Text, Image, HStack, Flex } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import RequestButton from '@/components/RequestButton'
import { MdOpenInNew } from "react-icons/md"

export default function Home() {
  return (
    <>
      <Head>
        <title>Advanced Craft Carpentry</title>
        <meta name="description" content="Advanced Craft Carpentry" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Flex id="hero" height={{ base: "100vh", md: "100vh" }} width="100vw" bg="#F6D9AC" justify={{ base: "center", md: "space-around"}}  paddingX="1rem" align="center" overflow="hidden" fontFamily="Manrope" paddingTop="3rem" direction={{ base: "column", md: "row" }}>
        <VStack width={{ base: "95%", md: "47.5%" }} height={{ base: "42.5vh", md: "90%" }} position="relative" marginBottom={{ base: "1rem", md: "0" }}>
          <Image src="hero-1.jpg" alt="hero-1" width="100%" height="100%" fit="cover" position="relative" zIndex="1" borderRadius="2rem"/>
          <VStack textAlign="right" justify="start" position="absolute" zIndex="2" right="0" top="0" align="end" fontWeight="700" spacing="0" overflow="hidden" padding="2rem">
            <Text color="white" fontSize="0.85rem" display={{ base: "none", md: "block"}}>When Carpentry Meets Character</Text>
            <Text color="white" fontSize={{ base: "1.75rem", md: "2.25rem" }} >Crafting Excellence,<br/>In Every Grain.</Text>
          </VStack>
          <VStack justify="end" position="absolute" zIndex="2" left="0" bottom="0" align="start" fontWeight="700" spacing="0" overflow="hidden" padding="2rem">
            <RequestButton/>
          </VStack>
        </VStack>
        <VStack  width={{ base: "95%", md: "47.5%" }} height={{ base: "42.5vh", md: "90%" }} justify="space-between">
          <VStack id="testimonials" width="100%" height={{ base: "100%", lg: "55%" }} position="relative">
            <Image  src="testimonials.jpg" alt="testimonials" width="100%" height="100%" position="relative" zIndex="1" borderRadius="2rem" fit="cover"/>
            <VStack textAlign="start" justify="start" position="absolute" zIndex="2" left="0" top="0" align="start" fontWeight="700" spacing="0" overflow="hidden" padding="2rem" w="70%">
              <Text color="white" fontSize="1rem">Hear from fellow Sydneysiders why <i>we</i> are the craftsmen of their choice.</Text>
              <Text color="white" fontSize="0.75rem" fontWeight="400">“Hard-working, skilled & knowledgable.”</Text>
            </VStack>
            <Text position="absolute" zIndex="2" left="0" bottom="0" color="white" padding="2rem" fontSize={{ base: "1.75rem", md: "2.25rem" }} fontWeight="700">View Testimonials</Text>
            <Text position="absolute" zIndex="2" right="0" top="0" color="white" padding="2rem" fontSize="2rem" fontWeight="700" _hover={{ cursor: "pointer" }}>
              <MdOpenInNew />
            </Text>
          </VStack>
          <Flex justify="space-between" width="100%" height={{ base: "100vh", md: "40%" }} display={{ base: "none", lg: "flex" }} direction={{ base: "column", md: "row" }}>
            <VStack id="services" width="47.5%" bg="#FF7252" position="relative" color="white" borderRadius="1rem">
              <Text color="white" fontSize="1rem" position="absolute" padding="2rem" top="0" left="0">Explore Our Services</Text>
              <Text color="white" fontSize="1.75rem" position="absolute" padding="2rem" bottom="0" left="0" fontWeight="700">Services</Text>
              <Text position="absolute" zIndex="2" right="0" top="0" color="white" padding="2rem" fontSize="2rem" fontWeight="700" _hover={{ cursor: "pointer" }}>
                <MdOpenInNew />
              </Text>
            </VStack>
            <VStack id="contact-us" width="47.5%" bg="#3E60A3" position="relative" color="white" borderRadius="1rem">
              <Text color="white" fontSize="1rem" position="absolute" padding="2rem" top="0" left="0">Got a Question?</Text>
              <Text color="white" fontSize="1.75rem" position="absolute" padding="2rem" bottom="0" left="0" fontWeight="700">Contact Us</Text>
              <Text position="absolute" zIndex="2" right="0" top="0" color="white" padding="2rem" fontSize="2rem" fontWeight="700" _hover={{ cursor: "pointer" }}>
                <MdOpenInNew />
              </Text>
            </VStack>
          </Flex>
        </VStack>
      </Flex>
    </>
  )
}
