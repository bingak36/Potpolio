import React from 'react'
import Hero from '../../components/hero/Hero'
import Tools from '../../components/tools/Tools'
import Project from '../../components/project/Project'
import ContactCta from '../../components/contactCta/ContactCta'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Tools/>
      <Project/>
      <ContactCta/>
    </div>
  )
}

export default Home
