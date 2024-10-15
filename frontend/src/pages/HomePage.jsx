import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import ScrollBar from "../components/ScrollBar";
import theme from "../theme";
function Homepage() {
  return (
    <ChakraProvider theme={theme}>
      <ScrollBar />
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </ChakraProvider>
  );
}

export default Homepage;
