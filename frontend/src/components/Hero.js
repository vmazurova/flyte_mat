import { Box, Heading, Text, Button, Input, Flex, VStack, HStack } from '@chakra-ui/react';
import BackgroundImage from '../assets/istockphoto-1210655852-612x612.jpg';  // Nový obrázek

const Hero = () => {
  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Obrázek pozadí */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={`url(${BackgroundImage})`}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"  // Změněno na contain, aby se celý obrázek zobrazil
        backgroundPosition="center center"  // Střed obrázku
        zIndex="-1"
      />

      {/* Překryvná tmavá vrstva (overlay) */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.2)"  // Jemná tmavá vrstva
        zIndex="0"
      />

      {/* Hlavní obsah hero sekce */}
      <VStack spacing="6" textAlign="center" zIndex="1" color="white">
        <Heading fontSize="6xl" fontWeight="bold">Let's build from here</Heading>
        <Text fontSize="xl" opacity="0.8">The world’s leading AI-powered developer platform.</Text>

        {/* E-mail input a tlačítka */}
        <HStack spacing="4">
          <Input
            placeholder="Email address"
            size="lg"
            variant="outline"
            bg="white"
            color="black"
            width="300px"
          />
          <Button
            colorScheme="purple"
            size="lg"
            px="8"
            bg="purple.600"
            _hover={{ bg: 'purple.500' }}
          >
            Sign up for GitHub
          </Button>
          <Button
            colorScheme="gray"
            size="lg"
            variant="outline"
            px="8"
            _hover={{ bg: 'whiteAlpha.200' }}
          >
            Start a free enterprise trial
          </Button>
        </HStack>

        {/* Loga pod e-mailem */}
        <HStack pt="8" spacing="6" justifyContent="center">
          <Text fontSize="md" color="gray.400">Trusted by the world’s leading organizations</Text>
          {/* Příklad loga */}
          <img src="https://example.com/logo1.png" alt="Logo1" width="80" />
          <img src="https://example.com/logo2.png" alt="Logo2" width="80" />
          <img src="https://example.com/logo3.png" alt="Logo3" width="80" />
        </HStack>
      </VStack>

      {/* Progresivní scrollbar */}
      <Box
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width="2px"
        bgGradient="linear(to-b, purple.500, green.500)"  // Barvy přechodu
        boxShadow="0px 0px 8px rgba(255, 255, 255, 0.5)"
      >
        {/* Ikona, která se zobrazí na začátku progress baru */}
        <Box
          position="absolute"
          top="10%"
          left="-10px"
          width="20px"
          height="20px"
          borderRadius="50%"
          bg="purple.500"
          boxShadow="0px 0px 8px rgba(255, 255, 255, 0.8)"
        />
      </Box>
    </Box>
  );
};

export default Hero;
