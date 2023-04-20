import React, { lazy, Suspense }  from "react";
import { projects } from "../data";
import { placeHolder } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "framer-motion";

const { useState } = React;



const Work = params =>  {
    const [lightboxDisplay, setLightBoxDisplay] = React.useState(false);
    const [imageToShow, setImageToShow] = useState("");
    const [altToShow, setAltToShow] = useState("");
    const showAlt = (alt) => {
      setAltToShow(alt);
      console.log('alt', alt);
    }
    const showImage = (image) => {
      setImageToShow(image);
      setLightBoxDisplay(true);
    };
    const hideLightBox = () => {
      let lightbox = document.getElementById('lightbox');
        lightbox.classList.toggle('fadeOut');
        var delayInMilliseconds = 500; //1 second
        setTimeout(function() {
          setLightBoxDisplay(false);
        }, delayInMilliseconds);
    };


  return (

<>


    <motion.div drag
      dragMomentum={true}
tabIndex={1}
        initial={{ opacity: 0, scale: 0, left:'-200%', top:'unset'}}
          animate={{ opacity: 1, scale: 1, top:0, left:'100px'}}
          transition={{ duration: 0.5 }}
           exit={{ opacity: 0, scale:0, left:'-50%', top:'unset'}}

     className=" stacked absolute top-1/2 left-1/2 w-8/12 h-5/6 text-left sm:w-full sm:!-left-[0px]" id="work">
              <div className="imagesPre flex flex-row flex-nowrap align-top ">
                <div className=" text-left w-8/12 ">work.exe
              </div>
                  <div className="w-1/12 inline-block text-right text-red-400 font-bold cursor-pointer" style={{zIndex:999}} onClick={params.toggle} >x</div>

        </div>
        <div className="images  h-full  bg-emerald-100   sm:w-full  px-10 m-auto relative overflow-auto">

                <div className="text-right bg-transparent w-2/12  "><a href="#animation">animation</a></div>


          {projects.map((project) => (
            <div key={project.title} className="projectContainer opacity-80 mt-16 relative">
            <div id={project.title} className="imagerow relative flex flex-row flex-wrap align-middle justify-start w-full white-bg  ">
              <div className="folder_tab green-border white-bg text-sm font-bold text-gray-800 py-5"> > {project.category}</div>
            {project.content.map((c, i) => (
              <div key={i} className=" flex flex-col w-3/12 sm:w-1/12">
              <a className="mx-auto justify-center align-center" onClick={() => {showImage(c.imageurl); showAlt(c.caption)}}>
              <img className="w-6/12 align-center justify-center block m-auto text-center" src="../imagesshrunk/file402.png" />
              </a>
                <p className="break-all  text-center mx-auto">{c.imageurl.split('imagesshrunk/').pop()}</p>
                </div>
            ))}
            </div>
            <div key={project.title} className="project-title relative flex flex-nowrap flex-row items-end align-middle h-10 px-5 border-solid border-white border-2 bg-gray-100 w-12/12 sm:text-xs md:text-sm">
                  <p className="text-gray-900 text-center red-hat tracking-widest w-full flex flex-nowrap flex-row align-middle  text-xs">
                    <span className="w-auto ">{project.category}/</span><span className="w-auto  font-bold">{project.title}/</span><span className="w-auto text-left font-light">{project.description}</span>
                  </p>
                </div>
              </div>
          ))}

        </div>
    </motion.div>

    {lightboxDisplay ?



    <div key={imageToShow} id="lightbox" className="w-full h-full" style={{pointerEvents:'none'}}>

          <motion.div drag
          dragMomentum={true} className="h-full">

    <div className="relative block w-6/12 my-10 mx-auto sm:w-full sm:h-auto my-0 " style={{background:'#f7f7f7', pointerEvents:'all'}}>
    <div className="imagesPre flex flex-row absolute block mx-auto !-top-2">
      <div className=" text-left w-8/12  ">{altToShow} </div>
        <div className="w-4/12 inline-block text-right text-red-800" style={{zIndex:999}} onClick={hideLightBox} >x</div>
    </div>
    <LazyLoadImage id="lightbox-img" className="block" placeholderSrc={placeHolder} loading="lazy" src={imageToShow} style={{pointerEvents:'none'}} />

    </div>
    </motion.div>
    </div>


  : ''}

  </>

  );
}

export default Work;
