import Navbar from "./components/Navbar.jsx";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Alljoutes from "./Routes/Alljoutes.js";
import Footer from "./components/Footer.jsx";
import { useLocation } from "react-router-dom";
import Admin from "./Pages/Admin.jsx";
import ChatBot from "react-simple-chatbot"
import { useState } from "react";
import "./Styles/Chatbot.css"

function App() {

  const [visible,setVisible] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  console.log(visible);

  let content;

  const steps = [{
    id:"AA",
    message:"Anmol jain",
    tirger:"yesss"
  }]

  if(path==="/admin"){
    content = <Admin />;
  }
  else{
    content= (
      <>
      <Navbar />
      <Alljoutes />
      <div
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        zIndex: "999",
        cursor: "pointer",
      }}
      >
        <img 
        style={{
          width:"50px",
          borderRadius:"20px"
        }}
        onClick={(()=>setVisible(true))}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsE3cjqhoJtfPGinHPV1b6KTjloQsvC7W-SrVj7xlZg&s"  alt=""/>
        </div>
      <Footer />
      <div
        className={`chatbot-container ${visible ? 'visible' : 'hidden'}`}
      >
        <h5
        onClick={(()=>setVisible(false))}
        style={{
          cursor:"pointer",
          display:"flex",
          justifyContent:"flex-end",
          paddingRight:"15px",
          fontWeight:"600",
          
        }}
        >X</h5>
        {/* Chatbot content */}
        <ChatBot steps={steps}/>
      </div>
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
