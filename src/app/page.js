import React from 'react'

import Navbar from './Components/navbar/page'
import Home from './Components/home1/page'
import Home2 from './Components/home2/page'
import Home3 from './Components/home3/page'
import Home4 from './Components/home4/page'
import Footer from './Components/footer/page'
const page = () => {

  return (
      <>
      <Navbar />
      <Home />
      <Home2 />
      <Home3 />
      <Home4 />
      <Footer />
      </>
  )
}

export default page