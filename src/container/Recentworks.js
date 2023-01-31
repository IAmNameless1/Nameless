import Project from "../components/project"
import P1 from "../assets/project1.png"
import P2 from "../assets/project2.png"
import P3 from "../assets/project3.png"
import P4 from "../assets/project4.png"
import P5 from "../assets/project 5.png"
import P6 from "../assets/project 6.png"

export default function Projectrow() {
    return (
        <div id="projects" className='p-24 full_Projects'>
        <h1 className='text-5xl h-fit ml-12 pl-12'><span className='deco'>Rece</span>nt   Projects</h1><div className="span w-fit"></div>
        <div className="grid lg:grid-col-3 p-10 pb-0">
            <div className="lg:col-start-1 lg:col-span-1">
            <Project p="https://docs.google.com/document/d/1PRMe2xUnJFRKZ1oLksrBtr66oR0-MtbX/edit?usp=sharing&ouid=110944947663564822368&rtpof=true&sd=true" src={P1} name="SMM Campaign Strategy"/>
            </div>
             <div className="lg:col-start-2 lg:col-end-3">
             <Project p="https://docs.google.com/spreadsheets/d/1tMxX86firj2-wrMCsGvgICo4CRPn2Ocm/edit?usp=sharing&ouid=110944947663564822368&rtpof=true&sd=true" src={P2} name="SMM Content Clanedar"/>
             </div>
             <div className="lg:col-start-3 lg:col-end-4">
             <Project p="https://drive.google.com/file/d/1U-SU5bA6yHAMmIXGQQHOHWXijZTDjFa6/view?usp=sharing" s="" src={P3} name="Campaign Plan For A Budget"/>
             </div> 
         </div>
         <div className="grid lg:grid-col-3 p-10 pb-0">
            <div className="lg:col-start-1 lg:col-span-1">
            <Project p="" s="" src={P4} name="Design a Website Structure"/>
            </div>
             <div className="lg:col-start-2 lg:col-end-3">
             <Project p="https://docs.google.com/document/d/1uh5w7IRPCEekXDnj1Bj4udDMuDCObBzcC-_PsQGnCMU/edit?usp=sharing" s="" src={P5} name="Blog For A Brand"/>
             </div>
             <div className="lg:col-start-3 lg:col-end-4">
             <Project  p="https://docs.google.com/spreadsheets/d/1_XzXSdBOns9tSjCEATfddn-zWyKpW__jEFmyUxx9pIs/edit?usp=sharing" s="" src={P6} name="Competitor Analysis"/>
             </div> 
         </div>
        </div>  
        
    )
}