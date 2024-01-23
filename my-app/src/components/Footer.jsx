import React from 'react'
import {useNavigate} from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();
  return (
    <div
    style={{
      backgroundColor:"#000000",
    }}
    >
        <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          padding:"50px 120px",
          color:"#ffffff",
          paddingRight:"0px",
        }}
        >
            <div>
              <h5
              style={{
                paddingBottom:"7px",
                fontSize:"20px"
              }}
              onClick={(()=>navigate("/"))}
              >Home</h5>
              <h5
              style={{
                paddingBottom:"7px",
                fontSize:"20px"
              }}
              onClick={(()=>navigate("/about"))}
              >About Us</h5>
              <h5
              style={{
                paddingBottom:"7px",
                fontSize:"20px"
              }}
              onClick={(()=>navigate("/offer"))}
              >What we Offer</h5>
            </div>
            <div
            style={{
              width:"40%",
            }}
            >
              <h5
              style={{
                paddingBottom:"7px",
                fontSize:"20px",
              }}
              >Shop No 8, Old parsi chawl, Hari Shankar Rd, Dahisar{"(E)"},Mumbai - 400 068</h5>
              <h5
              style={{
                paddingBottom:"7px",
                fontSize:"20px"
              }}
              >jainaminfotech2@gmail.com</h5>
              <h5></h5>
            </div>
        </div>
        <div
        style={{
          display:"flex",
          justifyContent:"center",
          color:"#ffffff"
        }}
        >
            <h1>Created by <a href="http://anmol179.github.io" target='_blank'>Anmol Jain</a></h1>
        </div>
    </div>
  )
}
