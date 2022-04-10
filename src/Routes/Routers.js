import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import { Display_DetailPaket } from '../../src/DetailPaket/Display_DetailPaket'
import {Dashboard} from '../../src/Dashboard/Dashboard'


export const Routers = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
      <Route path='Display_DetailPaket' element={<Display_DetailPaket/>}/>
    </Routes>
    </div>
  )
}