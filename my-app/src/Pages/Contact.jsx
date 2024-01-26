import React, { useState } from 'react'

export default function Contact() {

    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [message,setMessage] = useState("")

    const userData = (e) =>{
        e.preventDefault();
        let user = {
            name:name,
            phone:phone,
            message:message
        }
        // console.log(user)
    }    
  return (
    <div
    style={{
        paddingTop:"100px",
        backgroundColor:"#241e18",
        height:"100vh",
    }}
    >
        <div
        style={{
            display:"flex",
            justifyContent:"space-between",
            width:"66%",
            margin:"auto",
            color:"#000000",
            padding:"60px",
            border:"1px solid black",
            alignContent:"center",
            marginTop:"100px",
            backgroundColor:"#ffffff",
        }}
        >
        <div
        
        style={{
            fontWeight:"600",
            fontSize:"20px",
            width:"43%"
        }}>
            <h2>Hitesh Jain</h2>
            <h2>📱 +91 99876 05341</h2>
            <h2>💌 jainaminfotech2@gmail.com</h2>
            <p>📍 Shop No 8, Old parsi chawl, Hari Shankar Rd, Dahisar(E),Mumbai - 400 068</p>
        </div>
        <div
        style={{
            display:"grid",
            gridTemplateColumns:"repeat(1,1fr)"
        }}
        >
           <form 
           style={{
            display:"grid",
            gridTemplateColumns:"repeat(1,1fr)"
           }}
           onSubmit={userData}>
           <input 
           style={{
            border:"1px solid #000000",
            padding:"5px 10px",
            marginBottom:"6px"
           }}
           onChange={((e)=>setName(e.target.value))}
           type="text" placeholder='Enter Name' required/>
            <input 
             style={{
                border:"1px solid #000000",
                padding:"5px 10px",
                marginBottom:"6px"
               }}
               onChange={((e)=>setPhone(e.target.value))}
            type="tel" placeholder='Enter Phone No' required/>
            <textarea
             style={{
                border:"1px solid #000000",
                padding:"5px 10px",
                marginBottom:"6px"
               }}
               onChange={((e)=>setMessage(e.target.value))}
              rows={4} 
              cols={50} 
              placeholder="Type your text here..."
              required
            />
            <input 
             style={{
                border:"1px solid #000000",
                padding:"5px 10px",
                color:"#ffffff",
                backgroundColor:"#241e18"
               }}
            type="submit" value="Submit" />
           </form>
        </div>
        </div>
    </div>
  )
}
