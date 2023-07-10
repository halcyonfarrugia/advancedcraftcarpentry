import { HStack, VStack, Text, Divider, Container, Hide } from "@chakra-ui/react"
import "@fontsource/manrope/700.css"
import "@fontsource/manrope/800.css"
import { BsHammer} from "react-icons/bs"

const RequestButton = ({ width }) => {
    return (
        <HStack bg="#E3E3E3" maxWidth="20rem" borderRadius="1rem" padding="0.75rem 1.25rem" justify="space-between" color="black" _hover={{ cursor: "pointer" }} spacing="3rem" width={width}>
            <VStack fontFamily="Manrope" spacing="0" align="start">
                <Hide below="md">
                    <Text fontWeight="700" fontSize="0.6rem" color="#757575">INTERESTED?</Text>
                </Hide>
                <Text fontWeight="800" fontSize="0.8rem">Request a Quote</Text>
            </VStack>
            <HStack spacing="1rem">
                <Container bg="#A9A9A9" width="2px" height="3rem" padding="0"></Container>
                <BsHammer fontSize="1.25rem"/>
            </HStack>

        </HStack>
    )
}

export default RequestButton