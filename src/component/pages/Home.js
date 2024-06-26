import React from 'react'
import Navbar from '../Navbar'
import SectionOne from '../SectionOne'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills';
import MyStory from '../sections/MyStory';
const Home = () => {
  return (
    <div>
    <Navbar/>
<SectionOne/>
<Projects/>
<Skills/>
<MyStory/>
    </div>
  )
}

export default Home