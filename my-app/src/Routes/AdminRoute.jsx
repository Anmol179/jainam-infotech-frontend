import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import Adminctv from '../Pages/Admin.ctv'
import Adminaccess from '../Pages/Admin.access'
import Adminlaptop from '../Pages/Admin.laptop'
import Adminspare from '../Pages/Admin.spare'

export default function AdminRoute() {
  return (
    <Routes>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/admin/cctv' element={<Adminctv />}></Route>
        <Route path='/admin/access' element={<Adminaccess />}></Route>
        <Route path='/admin/laptop' element={<Adminlaptop />}></Route>
        <Route path='/admin/spare' element={<Adminspare />}></Route>
    </Routes>
  )
}