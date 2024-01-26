import React, { useState } from 'react'

export default function Admin() {


  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");
  const [login,setLogin] = useState(false);

  const adminPassword = process.env.REACT_APP_ADMIN_LOGIN_PASSWORD;

  console.log(adminPassword)

  const loginFuc = (e) =>{
    e.preventDefault();
    if(user==="Hitesh" && pass===adminPassword){
    setLogin(true)
    }
    else{
      alert("Wrong Username or Password.\nPlease try again.");
    }
  }

  if(!login){
    return(<div
      style={{
        backgroundImage:"url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D)",
        backgroundSize: 'cover',
        width: '100%',
        height:"100vh",
        paddingTop:"70px"
      }}
      >
        <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(1,1fr)",
          width:"40%",
          padding:"35px 100px",
          margin:"auto",
          backgroundColor: '#333333',
          borderRadius:"8px"
        }}
        >
          <h1
          style={{
            fontSize:"40px",
            fontWeight:"600",
            color:"#ffffff",
            textAlign:"center"
          }}
          >Jainam InfoTech</h1>
          <form onSubmit={loginFuc}>
          <input 
          style={{
            width:"100%",
            height:"30px",
            color:"#000000",
            backgroundColor:"#ffffff",
            marginBottom:"10px",
            border:"0px",
            outline:"0px",
            paddingLeft:"10px",
            borderRadius:"5px"
          }}
          onChange={((e)=>setUser(e.target.value))}
          type="text" placeholder='Enter Username' required/>
          <input 
           style={{
            width:"100%",
            height:"30px",
            color:"#000000",
            backgroundColor:"#ffffff",
            marginBottom:"10px",
            border:"0px",
            outline:"0px",
            paddingLeft:"10px",
            borderRadius:"5px"
          }}
          onChange={((e)=>setPass(e.target.value))}
          type="password" placeholder='Enter Password ' required/>
          <input 
          style={{
            width:"100%",
            height:"30px",
            color:"#ffffff",
            backgroundColor:"#000000",
            border:"0px",
            outline:"0px",
            paddingLeft:"10px",
            borderRadius:"5px"
          }}
          type="submit" value="Submit"/>
          </form>
        </div>
      </div>)
  }


  return (
    <>
    <h1>Login Success</h1>
    </>
  )
}
