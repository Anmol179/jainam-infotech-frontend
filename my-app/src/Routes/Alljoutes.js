import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Cctv from '../Pages/Cctv'
import Laptop from '../Pages/Laptop'
import Spare from '../Pages/Spare'
import Accessories from '../Pages/Accessories'
import Admin from '../Pages/Admin'
import AboutUs from '../Pages/AboutUs'
import Offer from '../Pages/Offer'

export default function Alljoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cctv' element={<Cctv />}></Route>
        <Route path='/laptop' element={<Laptop />}></Route>
        <Route path='/spare-parts' element={<Spare />}></Route>
        <Route path='/accessories' element={<Accessories />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/abbout' element={<AboutUs />}></Route>
        <Route path='/offer' element={<Offer />}></Route>
    </Routes>
  )
}
