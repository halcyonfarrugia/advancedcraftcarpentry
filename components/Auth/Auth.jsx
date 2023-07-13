import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, VStack, FormControl, Input, FormLabel, ModalFooter, Button, useDisclosure, Text, ModalOverlay } from "@chakra-ui/react";
import SignUp from "./SignUp";

const Auth = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Text _hover={{ cursor: "pointer", textDecor: "underline"}} onClick={onOpen}>
            Log In
        </Text>
        <Modal isOpen={isOpen} onClose={onClose} size={'lg'} fontFamily="Manrope">
            <ModalOverlay/>
            <SignUp/>
        </Modal>
        </>
    )
}

export default Auth;