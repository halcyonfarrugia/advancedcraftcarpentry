import { VStack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Image, FormControl, FormLabel, Input, Textarea, Alert } from "@chakra-ui/react"
import { useState } from "react"
import "@fontsource/manrope/700.css"
import "@fontsource/manrope/800.css"
import { MdCall } from "react-icons/md"
import { addDoc, collection } from "@firebase/firestore"
import { db } from "@/firebase/clientApp"

const ContactButton = ({ width }) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [address, setAddress] = useState(null);
    const [description, setDescription] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [alert, setAlert] = useState(null);

    const handleClose = () => {
        setName(null);
        setEmail(null);
        setPhoneNumber(null);
        setDescription(null);
        setAlert(null);
        onClose();
    };

    const handleSubmit = async (e) => {
        const emailRegex = /\S+@\S+\.\S+/; // Basic check for format: something@something.something
        const phoneNumberRegex = /^(?:\+61|0)[2-8](?:\d){8}$/; // Check for Australian phone numbers

        if (!emailRegex.test(email)) {
            setAlert({ status: "error", message: "Invalid email."});
            setTimeout(() => {
                setAlert(null)
            }, 3000);
            return;
        }

        if (!phoneNumberRegex.test(phoneNumber)) {
            setAlert({ status: "error", message: "Invalid phone number."});
            setTimeout(() => {
                setAlert(null)
            }, 3000);
            return;
        };

        try {
            const messageRef = await addDoc(collection(db, "messages"), {
                name: name,
                email: email,
                description: description,
                phoneNumber: phoneNumber,
                address: address,
            })
            setAlert({ message: "Successfully sent enquiry.", status: "success"})
            setTimeout(() => {
                handleClose();
            }, 3000);
        } catch (error) {
            console.log(error);
            setAlert({ message: "Error occurred.", status: "error"})
            setTimeout(() => {
                setAlert(null);
            }, 3000);
        }
    }

    return (
        <>
        <Button rightIcon={<MdCall />} variant='solid' fontWeight="700" onClick={onOpen}>
            Contact Us
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} fontFamily="Manrope" size="3xl">
                <ModalOverlay />
                <ModalContent>
                <ModalHeader fontWeight="700">Contact Us</ModalHeader>
                <ModalCloseButton />
                <ModalBody as={VStack} width="100%" spacing="1rem">
                    {alert && <Alert status={alert.status}>{alert.message}</Alert>}
                    <FormControl isRequired size>
                        <FormLabel fontWeight="700">Name</FormLabel>
                        <Input placeholder="Enter name" type="text" onChange={(e) => setName(e.target.value)}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontWeight="700">Email</FormLabel>
                        <Input placeholder="Enter email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontWeight="700">Phone Number</FormLabel>
                        <Input placeholder="Enter phone number" type="tel" onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontWeight="700">Address</FormLabel>
                        <Input placeholder="Enter address" type="text" onChange={(e) => setAddress(e.target.value)}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontWeight="700">Description</FormLabel>
                        <Textarea placeholder="Enter description" type="text" onChange={(e) => setDescription(e.target.value)}/>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button bg="#3E60A3" color="white" _hover={{ bg: "#365796" }} mr={3} fontWeight="700" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button mr={3} onClick={handleClose} fontWeight="700">
                        Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ContactButton