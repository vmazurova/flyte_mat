import { Box, Flex, Link, Button, Spacer, Image } from '@chakra-ui/react';  // Přidáme Image komponentu
import LogoImage from '../assets/flyte_bile.png';  // Import cesty k logu

const Navbar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      width="100%"
      bg="transparent" 
      color="white"
      py="4"
      px="8"
      zIndex="1000"
      fontFamily="'PT Sans', sans-serif"
    >
      <Flex align="center">
        {/* Vložení loga */}
        <Box fontSize="2xl" fontWeight="bold" letterSpacing="wide">
          <Image src={LogoImage} alt="Logo" height="60px" width="auto" />  {/* Zde je logo */}
        </Box>

        <Spacer />

        {/* Odkazy uprostřed */}
        <Flex gap="8" justify="center">
          <Link href="#home" _hover={{ textDecoration: 'none', color: 'primary.500' }}>
            Home
          </Link>
          <Link href="#features" _hover={{ textDecoration: 'none', color: 'primary.500' }}>
            Features
          </Link>
          <Link href="#pricing" _hover={{ textDecoration: 'none', color: 'primary.500' }}>
            Pricing
          </Link>
          <Link href="#contact" _hover={{ textDecoration: 'none', color: 'primary.500' }}>
            Contact
          </Link>
        </Flex>

        <Spacer />

        <Button colorScheme="purple" variant="solid">
          Login
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
