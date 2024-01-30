import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminNavbar({login,func}) {

    const naviagte = useNavigate();

    const logOutfunc = () =>{
        localStorage.setItem("login","0")
        naviagte("/admin")
    }


    function setLocalStorageOnWindowClose() {
        localStorage.setItem('login', '0');
    }
    
    window.addEventListener('beforeunload', setLocalStorageOnWindowClose);

     const checkLoginstatus = () =>{
        const val = localStorage.getItem("login");

        if(val===0){
            naviagte("/admin")
        }
     }





    window.onload = function() {
        checkLoginstatus();
    };

  return (
    <div
    style={{
        display:"flex",
        justifyContent:"space-between",
        padding:"15px 30px",
        alignItems:"center",
        backgroundColor:"#E5E4E2"
    }}
    >
        <div 
        style={{
            display:"flex",
            justifyContent:"space-between",
            // border:"1px solid #000000",
            width:"70%",
            padding:"10px",
            fontWeight:"600",
            fontSize:"20px",
            cursor:"pointer"
        }}
        >
          <h6
          onClick={(()=>naviagte("/admin/cctv"))}
          >CCTV</h6>
          <h6
          onClick={(()=>naviagte("/admin/laptop"))}
          >Laptop</h6>
          <h6
          onClick={(()=>naviagte("/admin/access"))}
          >Accessories</h6>
          <h6
          onClick={(()=>naviagte("/admin/spare"))}
          >Spare Parts</h6>
        </div>
        <div
        style={{
            // border:"1px solid #000000",
            width:"30%",
            display:"flex",
            justifyContent:'flex-end',
            padding:"10px",
            fontWeight:"600",
            fontSize:"20px"
        }}
        >
            <button
            onClick={logOutfunc}
            style={{
                backgroundColor:"#000000",
                color:"#ffffff",
                fontWeight:"600",
                padding:"5px 20px",
                borderRadius:"8px"
            }}
            >
                Logout
            </button>
        </div>
    </div>
  )
}
