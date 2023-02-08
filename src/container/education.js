import Detailbox from "../components/detailbox"
import SKILL from "../components/skill"

export default function EDUCTAION() {
    return (
        <div className="p-24 ml-24 mt-10 education">
            <h1 className="text-5xl"> <span className="deco">EDUC</span>TAION  & SKILL</h1><div className="span "></div>
            <div id="education" className="grid lg:grid-cols-2 pt-10 ">
                <div className="grid lg:col-start-1 lg:col-span-1 ">
                    <Detailbox year="2014" name="Secondary School Education" detail="I completed it from The Himalayan Public School. " cgp="8.2/10"/>
                    <Detailbox year="2016" name="Senior Secondary School Education" detail="I completed it from The Himalayan Public School. " cgp="7.2/10"/>
                    <Detailbox year="2020-2023" name="Bachelor of Computer Application" detail="From IGNOU"/>
                    <Detailbox year="2022" name="Digital MArketing" detail="I Did My Digital Marketing Certification from MyCaptain" cgp="8/10"/>
                </div>
                <div className="grid lg:col-start-2 lg:col-span-1 skill ">
                 <h2 className="text-5xl pt-10 w-fit h-fit ">My Skills</h2>
                 <p className="lg:row-start-2 lg:row-span-1 text-xl">I'm a Freelancer Digital Marketer with over 5 Months of experience. I design Campaigns, Run Ads, Do SEO, Site-audit and Competitor Analysis for businesses around around the world.</p>
                 <SKILL name="Digital Marketing" percentage="90%"/>
                 <SKILL name="Performane Marketing" percentage="75%"/>
                 <SKILL name="SEO" percentage="85%" />
                 <SKILL name="SMM" percentage="65%"/>
                 <SKILL name="Content Marketing" percentage="70%"/>
                 <SKILL name="Excel" percentage="70%" />
                 <SKILL name="Video Editing" percentage="60%" />
            </div>
            </div>
        </div>
      
    )
}