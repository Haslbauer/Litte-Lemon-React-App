import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"  
import Hero from "./components/Hero"
import Specials from "./components/Specials"
import Card from "./components/Card"
import BookingTable from "./components/BookingTable"
import Menu from "./components/Menu"




function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Hero />
        <Specials />
        <Menu />
        <BookingTable />
      </main>
      <Footer />  
    </>
  )
}

export default App
