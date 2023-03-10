import Social from '../components/social'
import Button from '../components/button'
import Typed from 'react-typed'

export default function Intro() {
 
    return (
      <div className='intro p-4'>
      <h1 className= "font-bold ">Mohammad Firoz</h1>
      <h3 className='text-4xl m-2 px-20 font-mono font-extralight'>I'm a <span className='autotype'>
        <Typed 
        strings={["Digital Marketer.","SEO Expert.","Video Editor.","Content Creator"]}
         typeSpeed={50}
         backSpeed={50}
         loop
         />
        </span></h3>
        <Social/>
      <Button className="button" name="Hire me" h="https://drive.google.com/file/d/1jNDFjFKAlRe3NJf24CFfff8FCVCjXiab/view?usp=share_link"/>
      </div> 
    )
  }