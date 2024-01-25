import React from 'react'

export default function Accessories() {
  return (
    <div>
      <div
      style={{
        height:"110px",
        backgroundColor:"#241e18"
      }}></div>
      <div
      style={{
        display:"grid",
        gridTemplateColumns:"repeat(5,1fr)",
        gap:"10px",
        backgroundColor:"#241e18",
        padding:"70px 120px"
      }}
      >
        <select name="" id=""
        style={{
          width:"170px",
          padding:"5px 20px",
          fontWeight:"600",
          fontSize:"18px",
          border:"1px solid #000000",
          borderRadius:"20px",
          backgroundColor:"#ffffff",
          color:"#000000"
        }}
        >
          <option value="">Sort By Price</option>
          <option value="LowToHigh">Low-High</option>
          <option value="HighToLow">High-Low</option>
        </select>
        <select name="filterRom" id=""
        style={{
          // backgroundColor:"grey",
          width:"150px",
          padding:"5px 20px",
          fontWeight:"600",
          fontSize:"18px",
          border:"1px solid #000000",
          borderRadius:"20px",
          backgroundColor:"#ffffff",
          color:"#000000"
        }}
        >
          <option value="">All</option>
        <option value="Headphone">Headphones</option>
        <option value="Webcam">WebCam</option>
        <option value="Keyboard&Mouse">KeyBoard & Mouse</option>
        <option value="Cables">Cables</option>
        </select>

        <input 
        style={{
          width:"400px",
          backgroundColor:"#ffffff",
          height:"40px",
          borderRadius:"20px",
          padding:"20px",
          fontWeight:"600",
          fontSize:"18px",
          border:"0px",
          'WebkitInputPlaceholder': { 
          color: '#000000',
        },
        }}
        type="text" placeholder='Search Accessories Over here'/>
      </div>
      <div>
        {
          //Data fetched from Api
        }
      </div>

    </div>
  )
}
