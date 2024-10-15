import { Flex, Box } from "@chakra-ui/react";
//import Sidebar from "../components/Sidebar"; // uprav cestu dle struktury projektu
import FitnessJourney from "../components/FitnessJourney";
import WorkoutOverview from "../components/WorkoutOverview";

const TrainingPlanDetail = () => {
  return (
    <Flex
      height="100vh"
      bgGradient="linear(to-r, black, #8D36FF)"
      padding={5}
      justify="center"
      align="center"
    >
      <Box
        display="flex"
        w="90%"
        maxW="1200px"
        bg="rgba(255, 255, 255, 0.1)"
        borderRadius="md"
        overflow="hidden"
        p={5}
      >
        <Flex flex={1} gap={5}>
          <FitnessJourney />
          <WorkoutOverview />
        </Flex>
      </Box>
    </Flex>
  );
};

export default TrainingPlanDetail;
