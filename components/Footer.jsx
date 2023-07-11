import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import "@fontsource/manrope/700.css"

export default function Footer() {
  return (
    <Box
      bg="#3E60A3"
      color="white" fontFamily="Manrope" fontWeight="700">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/services'}>Services</Link>
          <Link href={'/'}>Contact Us</Link>
        </Stack>
        <Text>© 2023 Advanced Craft Carpentry. All rights reserved</Text>
      </Container>
    </Box>
  );
}
