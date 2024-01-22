import Navbar from "./components/Navbar.jsx";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Alljoutes from "./Routes/Alljoutes.js";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Alljoutes />
    </ChakraProvider>
  );
}

export default App;
