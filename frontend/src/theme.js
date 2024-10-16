import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      500: '#9b59b6',  
      600: '#8e44ad', 
    },
    background: {
      gradient: 'linear-gradient(180deg, rgba(27,27,54,1) 0%, rgba(19,19,42,1) 50%, rgba(11,11,33,1) 100%)', // Hladký přechod pozadí
      100: '#1B1B36',  
      200: '#13132A', 
      300: '#0B0B21',  
    },
    text: {
      primary: '#FFFFFF',  
      secondary: '#AAB3D1',  
    },
  },
  styles: {
    global: {
      body: {
        bg: "background.gradient",  
        color: "text.primary",
      },
    },
  },
});

export default theme;
