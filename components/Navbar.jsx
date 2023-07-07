import { Button, HStack, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import "@fontsource/manrope/700.css"

const Navbar = () => {
    const router = useRouter();
    return (
        <HStack id="navbar" position="absolute" width="100vw" padding="1rem" spacing="1rem" fontFamily="manrope" fontWeight="700" color="#414141">
            <Image fit="contain" alt="logo" src="/logo.png" width="3rem" id="logo" onClick={() => router.push('/')} _hover={{ cursor: "pointer" }}/>
            <Text _hover={{ cursor: "pointer"}}>
                Home
            </Text>
            <Text _hover={{ cursor: "pointer"}}>
                About
            </Text>
            <Text _hover={{ cursor: "pointer"}}>
                Services
            </Text>
            <Text _hover={{ cursor: "pointer"}}>
                Contact Us
            </Text>
            <Button bg="#606E89" color="white" _hover={{ bg: "#365796" }}>
                Request Quote
            </Button>
        </HStack>
    )
}

export default Navbar