import { Box, Heading, HStack, Icon, VStack, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const WorkoutOverview = () => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.1)"
      padding={5}
      borderRadius="md"
      flex={1}
      ml={5}
      maxW="400px"
    >
      <Heading as="h2" size="lg" mb={4}>
        Workout Overview
      </Heading>
      <VStack align="stretch" spacing={4}>
        <WorkoutItem title="Get Started" description="1 session" completed />
        <WorkoutItem
          title="Warm-up routine"
          description="4 exercises"
          completed
          subItems={[
            "1. Cardio exercises basics (4 minutes 25 seconds)",
            "2. Strength training techniques (7 minutes 12 seconds)",
            "3. Stretching exercises (6 minutes 48 seconds)",
            "4. Cool-down stretches (2 minutes 41 seconds)",
          ]}
        />
        <WorkoutItem
          title="Nutrition tips"
          description="7 articles"
          completed
        />
        <WorkoutItem
          title="Hydration importance"
          description="7 articles"
          completed
        />
        <WorkoutItem
          title="Fitness evaluation"
          description="3 videos"
          completed
        />
      </VStack>
    </Box>
  );
};

const WorkoutItem = ({ title, description, completed, subItems }) => {
  return (
    <Box border="1px solid rgba(255, 255, 255, 0.2)" borderRadius="lg" p={4}>
      <HStack justify="space-between">
        <HStack>
          <Icon
            as={FaCheckCircle}
            color={completed ? "green.400" : "gray.400"}
          />
          <VStack align="flex-start" spacing={1}>
            <Text fontWeight="bold">{title}</Text>
            <Text fontSize="sm" color="gray.300">
              {description}
            </Text>
          </VStack>
        </HStack>
        <Icon as={FaCheckCircle} color="gray.400" /> {/* Nahraď ikonou šipky */}
      </HStack>
      {subItems && (
        <Box mt={3} ml={6}>
          <VStack align="stretch">
            {subItems.map((item, index) => (
              <Text key={index} fontSize="sm" color="gray.400">
                {item}
              </Text>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default WorkoutOverview;
