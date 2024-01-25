import Navbar from "./components/Navbar.jsx";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Alljoutes from "./Routes/Alljoutes.js";
import Footer from "./components/Footer.jsx";
import { useLocation } from "react-router-dom";
import Admin from "./Pages/Admin.jsx";

function App() {

  const location = useLocation();
  const path = location.pathname;

  let content;

  if(path==="/admin"){
    content = <Admin />;
  }
  else{
    content= (
      <>
      <Navbar />
      <Alljoutes />
      <Footer />
      </>
    )
  }
  return (
    <ChakraProvider>
      {
        content
      }
    </ChakraProvider>
  );
}

export default App;
