import React, { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";



const About = params => {
// const [isOpen, toggleOpen] = useCycle(true, false);

const isMobile = window.innerWidth < 768;



return (

  <motion.div drag={!isMobile}
  dragMomentum={true}
  tabIndex={2}
  initial={{ opacity: 0, scale: 0, left:'-200%', top:'unset'}}
  animate={{ opacity: 1, scale: 1, top:0, left:'100px'}}
  transition={{ duration: 0.5 }}
  exit={{ opacity: 0, scale:0, left:'-200%', top:'unset'}}
  className="stacked absolute flex flex-col  h-[90vh] sm:h-[80%] w-11/12 sm:w-full md:w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12   text-left  sm:!-left-[0px] rounded-lg" id="about"  >

        <div className="imagesPre flex flex-row flex-nowrap align-top bg-gray-100 justify-between">
        <div className="text-left w-11/12 ">about.exe</div>

            <div className="w-[20px] h-[20px]  text-right text-white bg-red-400 rounded-full px-[4px] py-[2px] cursor-pointer"  onClick={params.toggle}  >✕</div>
        </div>

        <div className="images bg-blue-100 sm:w-full w-full  m-auto relative  overflow-auto rounded-b-lg">


        <div className="social sticky top-0 grid grid-cols-6 gap-1 content-evenly mx-auto bg-gray-100 py-5 text-center">
        <a href="./imagesshrunk/kirstenallen_resume_2023.pdf" className="text-black red-hat" target="_blank">
        <span className="sm:hidden">resumé &nbsp;</span>
        <span className="fas text-black fas-lg fa-sticky-note"></span>
        </a>

        <a href="https://codepen.io/kirstenallen" className="text-black red-hat"  target="_blank">
          <span className="sm:hidden">codepen &nbsp;</span>
        <span className="fab text-black fa-lg fa-codepen"></span>
        </a>
        <a href="https://github.com/kirstenallen" className="text-black red-hat"  target="_blank">
          <span className="sm:hidden">github &nbsp;</span>
        <span className="fab text-black fa-lg  fa-github"></span>
        </a>

        <a href="mailto:kirsten@kallenillustration.com;" className="text-black red-hat"  target="_blank">
          <span className="sm:hidden">email &nbsp;</span>
        <span className="far text-black fa-lg fa-envelope"></span>
        </a>
        <a href="https://dribbble.com/kallenillu" className="text-black red-hat"  target="_blank">
          <span className="sm:hidden">dribbble &nbsp;</span>
        <span className="fab text-black fa-lg fa-dribbble" target="_blank"></span>
        </a>
        <a href="https://linkedin.com/in/kallenillu" className="text-black red-hat" target="_blank" >
        <span className="sm:hidden">  linkedin &nbsp;</span>
        <span className="fab text-black fa-lg fa-linkedin"></span>
        </a>
        </div>

        <h3 className="raydis w-8/12 mx-auto text-gray-100 text-center" style={{marginTop:'-5px'}}>
        hi there!
        </h3>
        <div className="red-hat w-6/12 sm:w-10/12 lg:w-8/12 xl:w-8/12 mx-auto text-center sm:text-left  text-gray-900 mt-10">
        Kirsten is a graphic designer, front end developer swiss-army-knife <br/> living in Austin, TX looking for <span className="bold code-green">fulltime / contract / remote / freelance</span> work.
        <br/>
        <br/>
        <a href="./imagesshrunk/kirstenallen_resume_2023.pdf" target="_blank" className=" red-hat" target="_blank">current resumé <span className="fas fas-lg fa-sticky-note"></span></a>
        <br/>
        <a href="./imagesshrunk/GRAV_Reference_Letter.pdf" target="_blank" className=" red-hat" target="_blank">reference letter 2019 <span className="fas fas-lg fa-sticky-note"></span></a>
        <br/>
        <a href="./imagesshrunk/UPLIFT_Reference_Letter.pdf" target="_blank" className="red-hat" target="_blank">reference letter 2023 <span className="fas fas-lg fa-sticky-note"></span></a>
        <br/>
        <h3 className="sm:text-2xl text-4xl font-medium title-font  text-gray-900 mb-5 sectionHeader red-hat text-xl mt-10 ">
        <div className="">experience</div>
        </h3>

        <ul className="sm:grid-cols-1 md:grid-cols-1 font-light red-hat text-right lg:text-center xl:text-center md:text-center grid grid-cols-2  gap-4 mx-auto mx-auto block w-8/12">
        <li>graphic design</li>
        <li>illustration</li>
        <li>package design</li>
        <li>painting</li>
        <li>motion graphics</li>
        <li>blender</li>
        <li>ui / ux design</li>
        <li>front-end dev</li>
        <li>3D design</li>
        <li>juggling</li>
        <li>carpentry</li>
        <li>stand up comedy</li>
        </ul>

        <h3 className="sm:text-2xl text-4xl font-medium title-font  text-gray-900 mb-5 sectionHeader red-hat text-xl mt-10 ">
        <div className="">specifics</div>
        </h3>

        <ul className="sm:grid-cols-1 md:grid-cols-1 font-light red-hat text-right  lg:text-center xl:text-center md:text-center  grid grid-cols-2  gap-4 mx-auto mx-auto block w-8/12">
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Javascript</li>
        <li>Github</li>
        <li>Netlify</li>
        <li>Vercel</li>
        <li>Shopify</li>
        <li>Wordpress</li>
        <li>Bigcommerce</li>
        <li>Squarespace</li>
        <li>Adobe Creative Suite</li>
        <li>Blender & Various 3D Software</li>
        <li>Microsoft Office Suite</li>
        <li>Google Office Suite</li>
        <li>Asana / Wrike / Airtable</li>
        </ul>
        <br/>


        <div className="placeholder"></div>
        <div className="sectionHeader courier-prime">
        <p>made ya look</p>
        <br/>
        <br/>
        </div>
        </div>
        </div>
        </motion.div>

)
}

export default About;
