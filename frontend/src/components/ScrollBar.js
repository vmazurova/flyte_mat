import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ScrollBar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollHeight(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="20px"
      height="100vh"
      width="2px"
      backgroundColor="rgba(255, 255, 255, 0.2)"
      zIndex="100"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height={`${scrollHeight}%`}
        backgroundColor="purple.500"
      />
    </Box>
  );
};

export default ScrollBar;
