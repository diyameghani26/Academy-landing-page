import React from 'react'
import Nav from './Components/Nav'
import Courses from './Components/Courses'
import Home from './Components/Home'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import About from './Components/About'
const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <Courses/>
     <Testimonials/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App

