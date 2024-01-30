import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Adminctv() {

const naviagte = useNavigate();

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
      padding:"200PX"
    }}
    >Admin.ctv</div>
  )
}
