import { ModalBody, ModalCloseButton, ModalContent, ModalHeader, VStack, FormControl, Input, FormLabel, ModalFooter, Button } from "@chakra-ui/react";
import "@fontsource/manrope/700.css"

const SignUp = () => {
    return (
        <ModalContent>
            <ModalHeader fontWeight="700">
                Register
            </ModalHeader>
            <ModalCloseButton/>
            <ModalBody as={VStack}>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Enter email" type="email"/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Enter password" type="password"/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input placeholder="Enter password again" type="password"/>
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue">Sign Up</Button>
            </ModalFooter>
        </ModalContent>
    )
}

export default SignUp;