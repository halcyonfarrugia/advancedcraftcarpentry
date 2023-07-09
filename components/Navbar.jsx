import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerCloseButton, HStack, Image, Text, VStack, useDisclosure, } from "@chakra-ui/react";
import { useRouter } from "next/router";
import "@fontsource/manrope/700.css"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    const router = useRouter();
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <HStack id="navbar" position="absolute" width="100vw" padding="1rem 2rem" spacing="1rem" justify={{ base: "space-between", md: "start" }} fontFamily="manrope" fontWeight="700" color="#414141">
            <Image fit="contain" alt="logo" src="/logo.png" width="3rem" height="3rem" id="logo" onClick={() => router.push('/')} _hover={{ cursor: "pointer" }}/>
            <Text _hover={{ cursor: "pointer"}} display={{ base: "none", md: "block"}}>
                Home
            </Text>
            <Text _hover={{ cursor: "pointer"}} display={{ base: "none", md: "block"}}>
                About
            </Text>
            <Text _hover={{ cursor: "pointer"}} display={{ base: "none", md: "block"}}>
                Services
            </Text>
            <Text _hover={{ cursor: "pointer"}} display={{ base: "none", md: "block"}}>
                Contact Us
            </Text>
            <Button bg="#3E60A3" color="white" _hover={{ bg: "#365796" }} display={{ base: "none", md: "block"}}>
                Request Quote
            </Button>
            <Button bg="#3E60A3" color="white" _hover={{ bg: "#365796" }} display={{ base: "block", md: "none"}} width="3rem" height="3rem" onClick={onOpen}>
                <GiHamburgerMenu/>
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement="right">
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton color="white" marginTop="1rem"/>
                    <DrawerBody as={VStack} spacing="2rem" color="white" bg="#3E60A3" padding="4rem 2rem" fontWeight="700" align="start">
                        <Text _hover={{ textDecor: "underline", cursor: "pointer" }}>
                            Home
                        </Text>
                        <Text _hover={{ textDecor: "underline", cursor: "pointer" }}>
                            Services
                        </Text>
                        <Text _hover={{ textDecor: "underline", cursor: "pointer" }}>
                            Contact Us
                        </Text>
                        <Text _hover={{ textDecor: "underline", cursor: "pointer" }}>
                            Request Quote
                        </Text>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </HStack>
    )
}

export default Navbar