import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='sticky-top '>
        <div className='container fs-5 d-flex justify-content-between'>
           <div>
            <Link role='button' to='/'>shopify</Link>
           </div>
           <div className='navigation'>
            <Link role='button' to='/' >Home</Link>
            <Link role='button' className='ms-4 ' to='/products'>Product</Link>
            <Link role='button' className='ms-4 ' to='/addProduct'>Add product</Link>
           </div>
        </div>
    </nav>
  )
}

export default Navbar