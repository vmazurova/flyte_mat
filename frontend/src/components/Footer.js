import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="background.200" color="text.primary" p="6">
      <Flex justify="space-between" align="center">
        <Text>© 2024 My Company. All rights reserved.</Text>
        <Flex gap="4">
          <Link href="#privacy" _hover={{ color: 'primary.500' }}>Privacy Policy</Link>
          <Link href="#terms" _hover={{ color: 'primary.500' }}>Terms of Service</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
