import { Box, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const RotatingCard = ({ imageSrc, name }) => {
  return (
    <MotionBox
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.5 }}
      bg="gray.700"
      width="200px"
      height="300px"
      borderRadius="md"
      overflow="hidden"
      perspective="1000px"
    >
      <Box
        width="100%"
        height="100%"
        bg="white"
        borderRadius="md"
        position="relative"
        boxShadow="lg"
      >
        <Image src={imageSrc} alt={name} objectFit="cover" height="100%" />
        <Text position="absolute" bottom="10px" left="10px" color="white" fontSize="lg">
          {name}
        </Text>
      </Box>
    </MotionBox>
  );
};

const SponsorSection = () => {
  return (
    <Box display="flex" justifyContent="space-around" p="10">
      <RotatingCard imageSrc="https://example.com/image1.jpg" name="John Doe" />
      <RotatingCard imageSrc="https://example.com/image2.jpg" name="Jane Smith" />
      <RotatingCard imageSrc="https://example.com/image3.jpg" name="Sam Wilson" />
    </Box>
  );
};

export default SponsorSection;
