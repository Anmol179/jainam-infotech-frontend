import Navbar from "./components/Navbar.jsx";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Alljoutes from "./Routes/Alljoutes.js";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Alljoutes />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
