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

  const[name,Setname] = useState("")
  const[phone,SetPhone] = useState("")
  const[product,Setproduct] = useState("")
  const[issue,Setissue] = useState("")

  console.log(name)

  const location = useLocation();
  const path = location.pathname;
  console.log(visible);

  let content;

  const steps = [{
    id:"Greet",
    message:"Welcome to Jainam Infotech😊",
    trigger:"inpuName"
  },
  {
    id:"inpuName",
    message:`How can I help you?`,
    trigger:"Help"
  },
  {
    id:"Help",
    options:[
      {
        value:"CCTV",
        label:"Buy CCTV",
        trigger:"cctvInfo"
      },
      {
        value:"Laptop",
        label:"Buy Laptop",
        trigger:"laptopInfo"
      },
      {
        value:"Accessories",
        label:"Buy Products",
        trigger:"accessories"
      },
      {
        value:"Repair",
        label:"Get SetUp Repaired",
        trigger:"form"
      },
      {
        value:"Upgrade",
        label:"Get SetUp Upgraded",
        trigger:"form"
      },
      {
        value:"Any Other",
        label:"Any aother Issue",
        trigger:"form"
      }
    ]
  },
  {
    id:"accessories",
    component:(
      <a href="http://localhost:3000/accessories" >To Get Info about Accessories Click here</a>
    ),
    end:true
  },
  {
    id:"cctvInfo",
    component:(
      <a href="http://localhost:3000/cctv" >To Get Info about CCTV Click here</a>
    ),
    end:true
  },
  {
    id:"laptopInfo",
    component:(
      <a 
      href="http://localhost:3000/laptop">To Get info about Laptops Click here</a>
    ),
    end:true
  },
  {
    id:"form",
    message:"What can I save your name as?",
    trigger:"setNamee"
  },
  {
    id:"setNamee",
    user:true,
    trigger:"setName"
  },
  {
    id:"setName",
    message: ({ steps }) => {
      const userEnteredName = steps.setNamee.value;
      Setname(userEnteredName);
      return `Enter Your phone no!`;
    },
    trigger:"phone"
  },
  {
    id:"phone",
    user:true,
    trigger:"setphone"
  },
  {
    id:"setphone",
    message: ({ steps }) => {
      const userEnteredNo = steps.phone.value;
      SetPhone(userEnteredNo);
      return `Enter your Product Type Laptop or Computer`;
    },
    trigger:"enterType"
  },
  {
    id:"enterType",
    user:true,
    trigger:"addType"
  },
  {
    id:"addType",
    message: ({ steps }) => {
      const userEnteredType = steps.enterType.value;
      Setproduct(userEnteredType);
      return `Enter the upgrade/repair required in your setUp`;
    },
    trigger:"enterIssue"
  },
  {
    id:"enterIssue",
    user:true,
    trigger:"thanksMsg"
  },
  {
    id:"thanksMsg",
    message: ({ steps }) => {
      const userEnteredIssue = steps.enterIssue.value;
      Setissue(userEnteredIssue);
      return `Thanks For your info, Our technical team will connect with you soon!`;
    },
    end:true
  }

]

  if(path==="/admin"){
    content = <Admin />;
  }
  else if(path==="/contact"){
    content= (
      <>
       <Navbar />
       <Alljoutes />
      </>
    )
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
        zIndex: "1",
        cursor: "pointer",
      }}
      >
        <img 
        style={{
          width:"50px",
          borderRadius:"20px"
        }}
        onClick={(()=>setVisible(!visible))}
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
          fontweight:"600",
          fontSize:"18px",
          display:"flex",
          justifyContent:"flex-end",
          paddingRight:"20px",
          color:"#000000",
          backgroundColor:"#ffffff"
        }}
        >X</h5>
        {/* Chatbot content */}
        <ChatBot 
        style={{
          backgroundColor:"#000000",
        }}
        steps={steps}/>
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

