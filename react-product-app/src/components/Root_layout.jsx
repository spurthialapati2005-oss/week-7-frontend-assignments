import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Root_layout() {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />

      <div className='mx-20 min-h-screen'>
        <Outlet context={{ searchTerm }} />
      </div>

      <Footer />
    </div>
  )
}

export default Root_layout