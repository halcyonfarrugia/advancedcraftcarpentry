import { Flex, VStack, Text, SimpleGrid } from "@chakra-ui/react"
import "@fontsource/manrope/700.css"
import "@fontsource/manrope/400.css"
import RequestButton from "./RequestButton"
import ServicePopUp from "./ServicePopUp"

const Services = () => {
    return (
        <Flex id="servicesSlide" minHeight="100vh" width="100vw" backgroundImage="services.jpg" fontFamily="Manrope" direction={{ base: "column", md: "row" }} padding="2rem">
            <VStack align={{ base: "center", md: "start" }} >
                <Text fontWeight="700" fontSize={{ base: "2.5rem" }} color="white" textShadow="black 0.25rem 0.25rem 2rem">
                    Our Services
                </Text>
                <Text fontWeight="400" maxWidth="20rem" fontSize="0.75rem" bg="white" padding="1rem" borderRadius="1rem">
                    <b>Ready to help you on your command!</b><br/>
                    Dive into a world where craftsmanship meets elegance. Discover how Advanced Craft Carpentry turns Sydney homes into masterpieces. Explore our services - shape your dream space today.
                </Text>
                <RequestButton width="20rem"/>
            </VStack>
            <SimpleGrid columns={[1, null, 2, 2, 3]} spacing="1rem" margin={{ base: "auto" }}>
                <ServicePopUp bg="#EFBA6C" title="Doors & Frames"/>
                <ServicePopUp bg="#EBA947" title="Decking & Handrails"/>
                <ServicePopUp bg="#E79823" title="Joinery"/>
                <ServicePopUp bg="#CA8216" title="Timber Floors & Stairs"/>
                <ServicePopUp bg="#A56A12" title="Kitchen & Bathroom Renovations"/>
                <ServicePopUp bg="#81530E" title="Maintenance"/>
                <ServicePopUp bg="#5C3B0A" title="Termites"/>
            </SimpleGrid>
        </Flex>
    )
}

export default Services