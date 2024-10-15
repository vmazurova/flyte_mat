import { Box, Heading, Text, Button, Input, Flex, VStack, HStack, Image } from '@chakra-ui/react';
import BackgroundImage from '../assets/homepage_back.jpg';
import PhoneMockup from '../assets/phone_mockup.png'; // Přidej obrázek mockupu telefonu

const Hero = () => {
  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={`url(${BackgroundImage})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center center"
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.6)"
        zIndex="0"
      />

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        zIndex="1"
        color="white"
        maxW="1200px"
        width="100%"
        px={8}
      >
        <VStack
          align="flex-start"
          spacing="6"
          textAlign="left"
          maxW="600px"
          p={4}
        >
          <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold">Posuň hranice svého výkonu...</Heading>
          <Text fontSize={{ base: "md", md: "xl" }} opacity="0.8">
            Od snu k realitě - každý trénink na míru jen pro tebe!
          </Text>

          <HStack spacing="4" flexWrap="wrap">
            <Input
              placeholder="Email address"
              size="lg"
              variant="outline"
              bg="white"
              color="black"
              width={{ base: "100%", md: "300px" }}
            />
            <Button
              colorScheme="purple"
              size="lg"
              px="8"
              bg="purple.600"
              _hover={{ bg: 'purple.500' }}
              width={{ base: "100%", md: "auto" }}
            >
             Registrace
            </Button>
          </HStack>

        </VStack>

        <Box
          ml={{ base: 0, md: 8 }}
          mt={{ base: 8, md: 0 }}
          maxW="1500px" 
          w="100%"
          transform={{ base: "none", md: "translateX(200px)" }}
          
        >
          <Image src={PhoneMockup} alt="Phone Mockup" width="100%" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
