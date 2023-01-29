import List from "./list"
import {SiLeetcode} from 'react-icons/si';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsInstagram ,BsGithub} from 'react-icons/bs';


export default function Social() {
    return (
        
        <ul className='w-fit social m-2'>
        <List className="social_media" href="https://www.linkedin.com/in/mohammad-firoz-73597b12a" name={<AiFillLinkedin/>}/>
        <List className="social_media" href="https://www.instagram.com/firoz95ahmad/" name={<BsInstagram/>}/>
        <List className="social_media" href="https://github.com/IAmNameless1" name={<BsGithub/>}/>
        </ul>
        
    )
  }