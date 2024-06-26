import React from 'react'
import './SectionOne.css';
import hand from './images/hand_icon.png';
import image from './images/mine2.png';

const SectionOne = () => {
  return (
    <>
    <div className="App">

     <div className='wordz'>
    <h1>Hi <img className="hand" src={hand} alt=""/><br/>
    I'm <span>Seyi</span> Oguntoye<br/>
    A FullStack Web <span>Developer</span> and Graphics <span>Designer</span></h1>
    <a href="https://drive.google.com/file/d/1bcjIuGW71V6jeQGqbsY8iE9_1_6sEEl8/view?usp=drive_link" download>Download CV</a>
</div>
<div className='imago'>
       <div className="App-logo" >
        </div>
        <img src={image} alt=""/>
       </div>
      
 
   </div>
  
   


   
  
   
</>
  )
}

export default SectionOne