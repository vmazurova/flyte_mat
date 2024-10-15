import React from 'react';
/*import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import ScrollBar from './components/ScrollBar';
import theme from './theme';*/
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import TrainingPlanDetail from './pages/TrainingPlanDetail';
import HomePage from './pages/HomePage';


function App() {
  return (
    
          <Router>
      <Routes>
         <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/training-plan-detail" element={<TrainingPlanDetail />} />
      </Routes>
    </Router>
    
  );
}

export default App;
