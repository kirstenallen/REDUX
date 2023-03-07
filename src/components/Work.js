import React, { lazy, Suspense }  from "react";
import { projects } from "../data";
import { placeHolder } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "framer-motion";

const { useState } = React;

const height = "100%";
const width = "auto";

export default function Work() {
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




    <motion.div drag
      dragMomentum={true}
      whileFocus={{ zIndex: 999 }}
        whileTap={{ zIndex: 999 }}
        initial={{ opacity: 0, scale: 0, left:'-200%', top:'unset'}}
          animate={{ opacity: 1, scale: 1, top:0, left:'100px'}}
          transition={{ duration: 0.5 }}
           exit={{ opacity: 0, scale: 0, left:'-200%', top:'unset'}}
          key="console"
     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-left " id="console">
              <div className="imagesPre flex flex-row flex-nowrap align-top ">
                <div className=" text-left w-8/12 ">welcome.exe
              </div>
                  <div className="w-4/12 inline-block text-right text-red-800" style={{zIndex:999}}>x</div>
        <div className="text-right bg-transparent w-2/12  "><a href="#animation">animation</a></div>
        </div>
        <div className="images bg-emerald-100   sm:w-full py-10 px-10 m-auto relative overflow-auto">
          {projects.map((project) => (
            <div key={project.title} className="projectContainer opacity-80 mt-16 relative">
            <div id={project.title} className="imagerow relative flex flex-row flex-wrap align-middle justify-start w-full white-bg  ">
              <div className="folder_tab green-border white-bg text-sm font-bold text-gray-800 py-5"> > {project.category}</div>
            {project.images.map((c, i) => (
              <a className="sm:w-1/2 w-1/5 py-10 mx-autoflex flex-col" key={c} onClick={() => {showImage(c); showAlt(project.description)}}>
              <img className="w-6/12 mx-auto text-center" src="../imagesshrunk/file402.png" />
              <p className="file_title">{c.split('imagesshrunk/').pop()}</p>

              </a>
            ))}
            </div>
            <div key={project.title} className="project-title relative flex flex-nowrap flex-row items-end align-middle h-10 px-5 border-solid border-white border-2 bg-gray-100 w-12/12 sm:text-xs md:text-sm">
                  <p className="text-gray-900 text-center courier-prime tracking-widest w-full flex flex-nowrap flex-row align-middle  text-xs">
                    <span className="w-auto ">{project.category}/</span><span className="w-auto  font-bold">{project.title}/</span><span className="w-auto text-left font-light">{project.description}</span>
                  </p>
                </div>
              </div>
          ))}
          {lightboxDisplay ?
          <div key={imageToShow} id="lightbox"  onClick={hideLightBox}>
          <LazyLoadImage  height={height} width={width} id="lightbox-img" placeholderSrc={placeHolder} loading="lazy" className="block relative height-80vh sm:w-full sm:h-100%" src={imageToShow}/>
            <p className="absolute bottom-7 text-center block mx-auto w-full"> {altToShow}</p>
          </div>
        : ''}
        </div>
    </motion.div>

  );
}
