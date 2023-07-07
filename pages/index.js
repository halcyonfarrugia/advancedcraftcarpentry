import Head from 'next/head'
import "@fontsource/manrope"
import "@fontsource/manrope/700.css"
import { VStack, Text, Image, HStack } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import RequestButton from '@/components/RequestButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Advanced Craft Carpentry</title>
        <meta name="description" content="Advanced Craft Carpentry" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <HStack id="hero" height="100vh" width="100vw" bg="#F6D9AC" justify="space-around" paddingX="1rem" align="center" overflow="hidden" fontFamily="Manrope" paddingTop="3rem">
        <VStack width="45%" height="90%" position="relative">
          <Image src="hero-1.jpg" alt="hero-1" width="100%" height="100%" position="relative" zIndex="1" borderRadius="2rem"/>
          <VStack textAlign="right" justify="start" position="absolute" zIndex="2" right="0" top="0" align="end" fontWeight="700" spacing="0" overflow="hidden" padding="2rem">
            <Text color="white" fontSize="0.85rem">When Carpentry Meets Character</Text>
            <Text color="white" fontSize="2.25rem">Crafting Excellence,<br/>In Every Grain.</Text>
          </VStack>
          <VStack justify="end" position="absolute" zIndex="2" left="0" bottom="0" align="start" fontWeight="700" spacing="0" overflow="hidden" padding="2rem">
            <RequestButton/>
          </VStack>
          
          
        </VStack>
        <VStack width="45%" height="90%" position="relative">
          
        </VStack>
      </HStack>
    </>
  )
}
