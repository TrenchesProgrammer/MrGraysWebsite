import React from 'react'
import Navbar from '../Components/Navbar'
import '../app/globals.css'
const page = () => {
  return (
    <>
      <Navbar/>
      <div className='hero'>
        <h1 style={{fontFamily:'Graduate'}}>Welcome to MR GRAY'S TATTOO STUDIO</h1>
        <p style={{fontFamily:'Asap condensed'}}>Your one-stop destination for unique and personalized tattoos.</p>
        <p style={{fontFamily:'Asap condensed'}}>Explore our portfolio, book an appointment, and get ready to wear your art with pride.</p>
      </div>
    </>
  )
}

export default page