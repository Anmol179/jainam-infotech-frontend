import { useState } from "react";
import logo from "../images/logo.png"
import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

    const navigate =useNavigate();
    return(
        <div id="container"
        style={{position:"fixed",
                width:"100%",
                display:"flex",
                justifyContent:"space-between",
                padding:"10px 15px",
                backgroundColor:"#000000",
                // position:"sticky"
            }}
        >
            <div>
                {/* logo */}
                <img src={logo}alt="" 
                style={{height:"80px",
                        borderRadius:"8px"
            }}
                />
            </div>
            <div
            style={{
                width:"50%",
                display:"flex",
                justifyContent:"space-around",
                alignItems:"center"
            }}
            >
                <h6 
                style={{
                    color:"white",
                    fontSize:"20px",
                    cursor:"pointer"
                }} 
                onClick={(()=>navigate("/"))}>Home</h6>
                <h6
                style={{
                    color:"white",
                    fontSize:"20px",
                    cursor:"pointer"
                }} 
                onClick={(()=>navigate("/cctv"))}>CCTV</h6>
                <h6
                style={{
                    color:"white",
                    fontSize:"20px",
                    cursor:"pointer"
                }} 
                onClick={(()=>navigate("/laptop"))}>Laptop</h6>
                <h6
                style={{
                    color:"white",
                    fontSize:"20px",
                    cursor:"pointer"
                }} 
                onClick={(()=>navigate("/spare-parts"))}>Spare Parts</h6>
                <h6
                style={{
                    color:"white",
                    fontSize:"20px",
                    cursor:"pointer"
                }} 
                onClick={(()=>navigate("/accessories"))}>Accessories</h6>
            </div>
            <div 
              style={{
                display:"flex",
                alignItems:"center"
              }}
            >
                {/* contact */}
                <button
                 style={{
                    backgroundColor: isHovered ? 'green' : 'white',
                    padding: '10px 15px',
                    transition: 'background-color 0.3s ease-in-out',
                    color : isHovered ? "white" : "black",
                  }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >Get In Touch</button>
            </div>
        </div>
    )
}

export default Navbar;