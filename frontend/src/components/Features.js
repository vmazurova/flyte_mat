import { Box, SimpleGrid, Heading, Text, Icon } from '@chakra-ui/react';
import { FaCode, FaUsers, FaCloud } from 'react-icons/fa';

const features = [
  { icon: FaCode, title: 'Code Collaboration', description: 'Collaborate on code with your team.' },
  { icon: FaUsers, title: 'Community Support', description: 'Join a vibrant community of developers.' },
  { icon: FaCloud, title: 'Cloud Hosting', description: 'Deploy your projects seamlessly in the cloud.' },
];

const Features = () => {
  return (
    <Box id="features" p="10" bg="background.100" color="text.primary">
      <Heading textAlign="center" mb="10">Features</Heading>
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing="8">
        {features.map((feature) => (
          <Box
            key={feature.title}
            textAlign="center"
            bg="gradient.card"  // Přechod pro karty
            p="6"
            borderRadius="lg"
            boxShadow="lg"
          >
            <Icon as={feature.icon} w={10} h={10} color="primary.500" mb="4" />
            <Heading size="md">{feature.title}</Heading>
            <Text mt="2" color="text.secondary">{feature.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
