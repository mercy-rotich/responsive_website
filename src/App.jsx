import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import { BrowserRouter } from 'react-router-dom'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
    
<Navbar/>

<Hero/>
<div className="container">
  <Title subTitle='OUR PROGRAM' title='What we offer'/>
<Programs/>
<About/>
<Title subTitle='Gallery' title='Campus Photos'/>
<Campus/>
<Title subTitle='Testimonials' title='What Students Says'/>
<Testimonials/>
<Title subTitle='contact us' title='Get In Touch'/>
<Contact/>

</div>

    </div>
  )
}

export default App