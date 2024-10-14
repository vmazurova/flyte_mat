import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      500: '#9b59b6',  // Fialová barva
      600: '#8e44ad',  // Tmavší fialová
    },
    background: {
      gradient: 'linear-gradient(180deg, rgba(27,27,54,1) 0%, rgba(19,19,42,1) 50%, rgba(11,11,33,1) 100%)', // Hladký přechod pozadí
      100: '#1B1B36',  // Tmavé pozadí
      200: '#13132A',  // Středně tmavé
      300: '#0B0B21',  // Nejsytější černé tóny
    },
    text: {
      primary: '#FFFFFF',  // Bílý text
      secondary: '#AAB3D1',  // Světlejší šedý text
    },
  },
  styles: {
    global: {
      body: {
        bg: "background.gradient",  // Hladký přechod pozadí
        color: "text.primary",
      },
    },
  },
});

export default theme;
