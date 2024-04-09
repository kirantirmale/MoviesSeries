import React from 'react'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Header from '../components/Header'

const loading = () => {
  return (
    <div className='main-h1 w-full top-5'>
      <Header />
      <Title title="Series" />
      <h1>Loading.......</h1>
      <Footer />
    </div>
  )
}

export default loading