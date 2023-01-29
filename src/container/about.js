import Button from '../components/button';
import React from 'react';
import  Image from '../assets/prof.jpeg' ;


export default function about() {
    return (
      <div id="about" className='p-24 grid lg:grid-col-2 full_about'>
        <div className=' lg:col-start-1 lg:col-end-2'>
        <h1 className='text-5xl h-fit ml-12 pl-12'><span className='deco'>Ab</span>out Me.</h1><div className="span w-fit"></div>
        <div className='image'>
          <img src={Image} alt='prof'/>
        </div>
        </div>
        <div className=' lg:col-start-2 lg:col-end-3 cv'>
          <h1 className=' text-4xl'>
            I'm a BACHELOR OF COMPUTER APPLICATION Graduate and is working as a Frelancer for last 5 month.
          </h1>
          <p>
          I'm a Digital MArketer with over 7 Months of experience. I'm from DEHRADUN, India. I help businesses grow and achieve their monthly target. As a marketer I am always up-to-date with the marketing trends. I love BRAINSTORMING when it comes to designing a  new Campaign or coming up with a new creative way to Traget the Audience.
          </p>
          <div className='ach'>
          <span className='font-bold'>8</span><h2>Industry Based Projects Completed.</h2>
          <span className='font-bold'>4</span><h2>Certifications Acquired.</h2>
          </div>
          <Button name="Download CV" h="https://drive.google.com/file/d/1M9Iym1qDMnAvf5T6v1rxo0IVmoNMCThB/view?usp=share_link"/>
        </div>
      </div>
      
    )
}