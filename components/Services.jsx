import { Flex, VStack, Text, SimpleGrid, Divider, HStack, Hide, Button } from "@chakra-ui/react"
import "@fontsource/manrope/700.css"
import "@fontsource/manrope/400.css"
import RequestButton from "./RequestButton"
import ServicePopUp from "./ServicePopUp"
import Carousel from "./Carousel"
import { FcApproval, FcCustomerSupport, FcFlashOn } from "react-icons/fc"
import { useRouter } from "next/router"

const Services = () => {
    const router = useRouter();
    return (
        <Flex id="servicesSlide" height="100vh" width="100vw" backgroundImage="services.jpg" fontFamily="Manrope" direction={{ base: "column", md: "row" }} padding={{ base: "1rem", md: "2rem" }} justify="space-between">
            <VStack align={{ base: "center", md: "start" }} flex="1.25" marginRight={{ base: "0", md: "1rem" }} marginBottom={{ base: "1rem", md: "0" }} spacing={{ base: "1rem", md: "2rem" }}>
                <Text fontWeight="700" fontSize="2.25rem" color="white" textShadow="black 0.1rem 0.1rem 1.5rem">
                    Our Services
                </Text>
                <VStack bg="white" padding="1rem" borderRadius="1rem" width={{ base: "full", md: "90%" }} boxShadow="gray 0.2rem 0.2rem 2rem" spacing="1rem">
                    <VStack spacing="0rem" width="full" align="start" fontSize="0.75rem">
                        <Text fontWeight="700">
                            Ready to help you on your command!
                        </Text>
                        <Text fontWeight="400">
                            Dive into a world where craftsmanship meets elegance. Discover how Advanced Craft Carpentry turns Sydney homes into masterpieces. Explore our services - shape your dream space today.
                        </Text>
                    </VStack>
                    <Divider/>
                    <HStack width="full" spacing="1rem" flex="1">
                        <FcApproval fontSize="2rem"/>
                        <VStack spacing="0rem" align="start" fontSize="0.75rem" flex="3">
                            <Text fontWeight="700">
                                Award-Winning Craftsmanship
                            </Text>
                            <Hide below="md">
                                <Text fontWeight="400">
                                    As consistent winners of the Houzz Best Service award, you can trust us to deliver quality, each and every time no matter what.
                                </Text>
                            </Hide>
                        </VStack>
                    </HStack>
                    <Divider/>
                    <HStack width="full" spacing="1rem">
                        <FcCustomerSupport fontSize="2rem" flex="1"/>
                        <VStack spacing="0rem" align="start" fontSize="0.75rem" flex="3">
                            <Text fontWeight="700">
                                Customer Satisfaction
                            </Text>
                            <Hide below="md">
                                <Text fontWeight="400">
                                    Our dedication to ensuring customer satisfaction has led to an impressive track record of positive reviews and grateful customers.
                                </Text>
                            </Hide>
                        </VStack>
                    </HStack>
                    <Divider/>
                    <HStack width="full" spacing="1rem">
                        <FcFlashOn fontSize="2rem" flex="1"/>
                        <VStack spacing="0rem" align="start" fontSize="0.75rem" flex="3">
                            <Text fontWeight="700">
                                Lightning Quick Response
                            </Text>
                            <Hide below="md">
                                <Text fontWeight="400">
                                    We prioritize efficient communication, ensuring a prompt response to every inquiry and always delivering on schedule.
                                </Text>
                            </Hide>
                        </VStack>
                    </HStack>
                </VStack>
                <Hide below="md">
                    <RequestButton width="15rem"/>
                </Hide>
            </VStack>
            <Carousel/>
        </Flex>
    )
}

export default Services