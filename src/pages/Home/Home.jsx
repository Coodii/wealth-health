import React from 'react'
import Header from '../../components/Header/Header'
import './home.css'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <main className='home'>
          <h1 className='home_title'>Welcome on HRnet</h1>
          <p className='home_description'>A website to manage your employees datas.</p>
        </main>
        <Footer/>
    </div>
  )
}

export default Home