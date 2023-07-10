import { VStack, Text, HStack } from "@chakra-ui/react"
import { MdOpenInNew } from "react-icons/md"

const ServicePopUp = ({ bg, title }) => {
    return (
        <VStack bg={bg} width={{ base: "15rem", sm: "11rem", md: "12rem", xl: "15rem" }} color="white" height={{ base: "6rem", sm: "12rem", md: "12rem" }}justify="space-between" padding="1rem" align="start" margin="1rem">
            <HStack w="100%" h="1rem" justify="space-between">
                <Text color="white" fontSize="1rem" top="0" left="0">Learn More</Text>
                <Text  zIndex="2" color="white" fontSize="2rem" fontWeight="700" _hover={{ cursor: "pointer" }}>
                <MdOpenInNew />
            </Text>
            </HStack>
            <Text color="white" fontSize={{ base: "1.1rem", md: "1.25rem" }} fontWeight="700" textShadow="black 0.25rem 0.25rem 2rem">{title}</Text>
        </VStack>
    )
}

export default ServicePopUp
