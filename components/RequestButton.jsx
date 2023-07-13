import { HStack, VStack, Text, Divider, Container, Hide, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Image, FormControl, FormLabel, Input, Textarea, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, ButtonGroup, Alert } from "@chakra-ui/react"
import { useState } from "react"
import "@fontsource/manrope/700.css"
import "@fontsource/manrope/800.css"
import { BsHammer} from "react-icons/bs"
import { collection, addDoc } from "@firebase/firestore"
import { db } from "@/firebase/clientApp"

const RequestButton = ({ width }) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [address, setAddress] = useState(null);
    const [budget, setBudget] = useState(null);
    const [description, setDescription] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [alert, setAlert] = useState(null);

    const handleClose = () => {
        setName(null);
        setEmail(null);
        setPhoneNumber(null);
        setAddress(null);
        setBudget(null);
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
            const quoteRef = await addDoc(collection(db, "quotes"), {
                name: name,
                email: email,
                description: description,
                phoneNumber: phoneNumber,
                address: address,
                budget: budget,
            })
            setAlert({ message: "Quote successfully sent.", status: "success" })
            setTimeout(() => {
                handleClose();
            }, 4000)
        } catch (error) {
            console.log(error);
            setAlert({ message: "Error occurred.", status: "error" })
            setTimeout(() => {
                setAlert(null);
            }, 4000)
        }
    }

    return (
        <>
        <Button rightIcon={<BsHammer/>} onClick={onOpen} fontWeight="700" padding="1rem">Request a Quote</Button>
        <Modal isOpen={isOpen} onClose={onClose} fontFamily="Manrope" size="3xl">
                <ModalOverlay />
                <ModalContent>
                <ModalHeader fontWeight="700">Request a Quote</ModalHeader>
                <ModalCloseButton />
                <ModalBody as={VStack} width="100%" spacing="1rem">
                    {alert && <Alert status={alert.status}>{alert.message}</Alert>}
                    <HStack width="100%" spacing="1rem">
                        <Hide below="md">
                            <Image src="quote.jpg" alt="quote" fit="cover" width="100%" height="sm" flex="2" borderRadius="1rem"/>
                        </Hide>
                        <VStack flex="3" spacing="1rem">
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
                                <FormLabel fontWeight="700">Budget</FormLabel>
                                <NumberInput onChange={(e) => setBudget(e.replace(/^\$/, ''))}>
                                <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                        </VStack>
                    </HStack>
                    <FormControl isRequired>
                        <FormLabel fontWeight="700">Description</FormLabel>
                        <Textarea placeholder="Enter description" type="text" onChange={(e) => setDescription(e.target.value)}/>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button bg="#3E60A3" color="white" _hover={{ bg: "#365796" }} mr={3} fontWeight="700" onClick={handleSubmit}>
                        Request Quote
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

export default RequestButton