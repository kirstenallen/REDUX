import React, { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";



const About = params => {
// const [isOpen, toggleOpen] = useCycle(true, false);

const isMobile = window.innerWidth < 768;



return (

  <motion.div drag={!isMobile}
  dragMomentum={true}
  tabIndex={1}
  initial={{ opacity: 0, scale: 0, left:'-200%', top:'unset',  zIndex:'888'}}
  animate={{ opacity: 1, scale: 1, top:0, left:'100px'}}
  transition={{ duration: 0.5 }}
  exit={{ opacity: 0, scale:0, left:'-200%', top:'unset'}}
  className="stacked absolute flex flex-col  h-[90vh] sm:h-[80%] w-11/12 sm:w-full md:w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12   text-left  sm:!-left-[0px] rounded-lg" id="about">

        <div className="imagesPre flex flex-row flex-nowrap align-top bg-gray-100">
        <div className="text-left w-8/12 ">about.exe</div>
        <div className="w-4/12 inline-block text-right font-bold text-red-400" style={{zIndex:999}} onClick={params.toggle} >x</div>
        </div>

        <div className="images bg-blue-100 sm:w-full w-full  m-auto relative  overflow-auto rounded-b-lg">


        <div className="social sticky top-0 grid grid-cols-6 gap-1 content-evenly mx-auto bg-gray-200 py-5 text-center">
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


        <div className="red-hat w-8/12 mx-auto text-center text-gray-900 mt-10">
        Kirsten is a graphic designer, front end developer, jack-of-all-trades living in Austin, TX looking for <span className="bold code-green">remote / freelance</span> work.
        <br/>


        <h1 className="sm:text-2xl text-4xl font-medium title-font  text-gray-900 mb-5 sectionHeader red-hat text-xl mt-10 ">
        <div className="">experience / hobbies</div>
        </h1>

        <ul className="sm:grid-cols-1 md:grid-cols-1 font-light red-hat text-left grid grid-cols-2  gap-4 mx-auto mx-auto block w-8/12">
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

        <h1 className="sm:text-2xl text-4xl font-medium title-font  text-gray-900 mb-5 sectionHeader red-hat text-xl mt-10 ">
        <div className="">specifics</div>
        </h1>

        <ul className="sm:grid-cols-1 md:grid-cols-1 font-light red-hat text-left grid grid-cols-2  gap-4 mx-auto mx-auto block w-8/12">
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
        <p>the secret code is : skifree</p>
        <br/>
        <br/>
        </div>
        </div>
        </div>
        </motion.div>

)
}

export default About;
