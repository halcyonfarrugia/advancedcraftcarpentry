import { Flex, VStack, Text, SimpleGrid, Divider, HStack, Hide, Button } from "@chakra-ui/react"
import Navbar from "@/components/Navbar";
import "@fontsource/manrope/700.css"
import "@fontsource/manrope/400.css"
import RequestButton from "@/components/RequestButton"
import ServicePopUp from "@/components/ServicePopUp"
import Carousel from "@/components/Carousel"
import { FcApproval, FcCustomerSupport, FcFlashOn } from "react-icons/fc"
import { useRouter } from "next/router"
import Footer from "@/components/Footer";


const About = () => {
    return (
        <>
        <VStack height="100vh" width="100vw" backgroundImage="about.jpg" id="servicesSlide" overflow="scroll" align="end">
            <Navbar/>
            <VStack paddingTop="6rem" fontFamily="Manrope" align={{ base: "center", md: "end" }} width={{ base: "sm", md: "3xl" }} spacing={{ base: "1rem", md: "1rem" }} paddingRight={{ base: "0", md: "2rem" }} color="white">
                <Text fontWeight="700" fontSize={{ base: "2rem", md: "2.25rem" }} color="white" textShadow="gray 0.1rem 0.1rem 1.5rem">
                    About Us
                </Text>
                <Text fontWeight="700" fontSize={{ base: "1.5rem" }} color="white" textShadow="gray 0.1rem 0.1rem 2rem" textAlign={{ base: "center", md: "right" }}>
                    We Build For You, Your Family, Your Lifestyle.
                </Text>
                <Text fontWeight="400" textAlign={{ base: "center", md: "right" }} fontSize={{ base: "0.75rem", md: "1rem" }}>
                        Advanced Craft Carpentry is a small to medium building and carpentry based business operating in the Sydney Eastern Suburbs region.<br/><br/>
                        With over 30 years of experience in the construction industry, both in the UK and Australia, Advanced Craft Carpentry has the capacity to deal with tasks ranging from extensions and additions, Sydney termite repairs through to kitchen and bathroom renovations loft conversions to window replacement, Sydney decking builder and a whole array of carpentry and joinery tasks and projects as well as project managing all other trades and associated works. <br/> <br/>
                        Advanced Craft Carpentry has qualifications inclusive of certificate III in Carpentry and Joinery in both the UK and Australia and also Certificate IV building Qualification in Australia, affiliated with Trades monitor & HIA and The Office Of Fair Trading, which is now essential consumers to contract only licensed builders to do the work in which they are licensed. <br/> <br/>
                        <b>We are THE Sydney-based carpenter.</b>
                </Text>
                <RequestButton/>
            </VStack>           
        </VStack>
        <Footer/>
        </>
    )
}

export default About