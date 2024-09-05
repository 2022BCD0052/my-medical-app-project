"use client"
import Navbar from '@/components/Dashboard/Navbar';
import Sidebar from '@/components/Dashboard/SideBar';
import React, { ReactNode } from 'react'

const Layout = ({children}:{
    children: ReactNode}) => {
  return (
    <div className=''>
      <Navbar/>
      <div className='flex'>
         <Sidebar/>
         <div>
         </div>
      </div>
     
{children}  

    </div>
  )
}

export default Layout;