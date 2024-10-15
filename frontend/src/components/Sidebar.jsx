import { VStack, Box } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack
      spacing={4}
      align="center"
      bg="rgba(255, 255, 255, 0.1)"
      padding={5}
      w="60px"
      minH="100vh"
    >
      <Box w="30px" h="30px" bg="purple.400" borderRadius="full"></Box>
      <Box
        w="30px"
        h="30px"
        bg="rgba(255, 255, 255, 0.2)"
        borderRadius="full"
      ></Box>
      <Box
        w="30px"
        h="30px"
        bg="rgba(255, 255, 255, 0.2)"
        borderRadius="full"
      ></Box>
      <Box
        w="30px"
        h="30px"
        bg="rgba(255, 255, 255, 0.2)"
        borderRadius="full"
      ></Box>
    </VStack>
  );
};

export default Sidebar;
