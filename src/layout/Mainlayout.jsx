import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from '../page/Footer'
import Afzallik from '../page/Afzallik'
import Aksiya from '../page/Aksiya'
import Fikr from '../page/Fikr'
import Aloqa from '../page/Aloqa' 
export default function Mainlayout() {
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <div className='box_122'>

      <Aksiya />
      <Afzallik />
      <Fikr />
      <Aloqa />
      <Footer />
      </div>
    </div>
  )
}
