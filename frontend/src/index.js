import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#9b59b6',
    },
    black: '#000000',
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
