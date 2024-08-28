"use client"
import React, { ReactNode } from 'react'

const Layout = ({children}:{
    children: ReactNode}) => {
  return (
    <div>
        <h2>
            Dashboard page only
        </h2>
{children}
    </div>
  )
}

export default Layout;