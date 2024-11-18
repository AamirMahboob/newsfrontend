 
import { useTheme } from '@mui/material/styles'
import React from 'react'
import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Projects from '../components/Projects'
import SkillsSection from '../components/SkillsSection'
import Experience from '../components/Experience'
import Header from '../components/Header'

const Client = () => {
  const theme = useTheme()

  return (
    <>
      
      {/* <SignIn /> */}
      <Header />
       
        <Hero />
{/*      
       
        <Aboutme />
        <Experience />
        <SkillsSection />
 
        <Projects /> 
     
        <Testimonial />
      
      <Footer /> */}

      
    </>
  )
}

export default Client
