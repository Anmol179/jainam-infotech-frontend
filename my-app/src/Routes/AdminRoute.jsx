import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'

export default function AdminRoute() {
  return (
    <Routes>
        <Route path='/admin' element={<Admin />}></Route>
    </Routes>
  )
}