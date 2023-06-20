import React, { Children } from 'react'
import Header from './Header'
import { Toaster } from 'react-hot-toast'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main style={{ minHeight: "70vh" }}>
<Toaster/>
{children}

    </main>
    <Footer/>
    
    
    
    </>
  )
}

export default Layout