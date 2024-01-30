import React, { useEffect, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar';
import { useNavigate } from 'react-router-dom';

export default function Admin() {

 
  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");
  const [login,setLogin] = useState(false);

  const adminPassword = process.env.REACT_APP_ADMIN_LOGIN_PASSWORD;
  const navigate = useNavigate();

  console.log(adminPassword,pass)

  const logoutFunc = (login) =>{
    setLogin(!login)
    // localStorage.setItem("login","0")
  }

  console.log(login)
  useEffect(()=>{

    let val = localStorage.getItem("login");

    if(val==="1"){
      setLogin(true);
    }
    else{
      setLogin(false)
    }
  },[])

  const loginFuc = (e) =>{
    e.preventDefault();
    if(user==="Hitesh" && pass===adminPassword){
      localStorage.setItem('login', '1');
      setLogin(true)
      navigate("/admin/cctv");
    }
    else{
      localStorage.setItem('login', '0');
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
    <AdminNavbar login={login} func={logoutFunc}/>
    <h1>Login Success</h1>
    </>
  )
}
