import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function homeLayout({ children }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <div className='bottom-0'>
        <Footer />
      </div>
    </>
  )
}

export default homeLayout;