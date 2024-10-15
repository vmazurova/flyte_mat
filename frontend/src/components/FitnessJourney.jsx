import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaStar, FaClock } from "react-icons/fa";

const FitnessJourney = () => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.1)"
      padding={5}
      borderRadius="md"
      flex={1}
      maxW="400px"
    >
      <Box bg="rgba(255, 255, 255, 0.05)" borderRadius="lg" p={5} mb={5}>
        <Image
          src="../assets/trainingplandetail_back.jpg"
          alt="Workout"
          borderRadius="md"
        />
      </Box>
      <VStack align="flex-start" spacing={4}>
        <Heading as="h1" size="lg">
          Fitness Journey
        </Heading>
        <HStack>
          <Image
            src="../assets/user-profile.png"
            alt="User"
            borderRadius="full"
            boxSize="40px"
          />
          <Text fontSize="lg" border="1px solid" borderRadius="md" padding={2}>
            Achieve Your
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaClock} />
          <Text>43 minutes</Text>
        </HStack>
        <HStack>
          <Icon as={FaStar} />
          <Text>4.7/5.0</Text>
        </HStack>
        <Text fontSize="sm" opacity={0.8}>
          Explore this program to enhance your fitness journey with personalized
          workouts and expert guidance.
        </Text>
      </VStack>
    </Box>
  );
};

export default FitnessJourney;
