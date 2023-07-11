import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerCloseButton, HStack, Image, Text, VStack, useDisclosure, Hide } from "@chakra-ui/react";
import { useRouter } from "next/router";
import "@fontsource/manrope/700.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdCall } from "react-icons/md"
import RequestButton from "./RequestButton";
import ContactButton from "./ContactButton";

const Navbar = () => {
    const router = useRouter();
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <HStack id="navbar" position="absolute" width="100vw" padding="1rem 2rem" spacing="1rem" justify={{ base: "space-between", md: "start" }} fontFamily="manrope" fontWeight="700" color="white" textShadow="black 0.1rem 0.1rem 1.5rem">
            <Image fit="contain" alt="logo" src="/logo.png" width="3rem" height="3rem" id="logo" onClick={() => router.push('/')} _hover={{ cursor: "pointer" }}/>
            <Text _hover={{ cursor: "pointer", textDecor: "underline"}} display={{ base: "none", md: "block"}} onClick={() => router.push('/')}>
                Home
            </Text>
            <Text _hover={{ cursor: "pointer", textDecor: "underline"}} display={{ base: "none", md: "block"}} onClick={() => router.push('/about')}>
                About
            </Text>
            <Text _hover={{ cursor: "pointer", textDecor: "underline"}} display={{ base: "none", md: "block"}} onClick={() => router.push('/services')}>
                Services
            </Text>
            <Hide below="md">
                <RequestButton/>
            </Hide>
            <Hide below="md">
                <ContactButton/>
            </Hide>
            <Hide below="md">
                <Button colorScheme="orange" fontWeight="700">Sign In</Button>
            </Hide>
            <Button bg="#3E60A3" color="white" _hover={{ bg: "#365796" }} display={{ base: "block", md: "none"}} width="3rem" height="3rem" onClick={onOpen}>
                <GiHamburgerMenu/>
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement="right">
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton color="white" marginTop="1rem"/>
                    <DrawerBody as={VStack} spacing="2rem" color="white" bg="#3E60A3" padding="4rem 2rem" fontWeight="700" align="start">
                        <Text _hover={{ textDecor: "underline", cursor: "pointer" }} onClick={() => router.push('/')}>
                            Home
                        </Text>
                        <Text _hover={{ textDecor: "underline", cursor: "pointer" }} onClick={() => router.push('/about')}>
                            About
                        </Text>
                        <Text _hover={{ textDecor: "underline", cursor: "pointer" }} onClick={() => router.push('/services')}>
                            Services
                        </Text>
                        <Text _hover={{ textDecor: "underline", cursor: "pointer" }}>
                            Sign In
                        </Text>
                        <Text _hover={{ textDecor: "underline", cursor: "pointer" }}>
                            Register
                        </Text>
                        <RequestButton/>
                        <ContactButton/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </HStack>
    )
}

export default Navbar