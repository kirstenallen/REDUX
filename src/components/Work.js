import React from "react";
import { projects } from "../data";
import { placeHolder } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "framer-motion";

const { useState} = React;



const Work = (params, props) =>  {
    const [lightboxDisplay, setLightBoxDisplay] = React.useState(false);
    const [imageToShow, setImageToShow] = useState("");
    const [altToShow, setAltToShow] = useState("");
    const [blurbToShow, setBlurbToShow] = useState("");
    const [linkShow, setLinkShow] = useState("");
    const isMobile = window.innerWidth < 768;



    const showBlurb = (year) => {
      setBlurbToShow(year);
      console.log('year', year);
    }
    const showAlt = (alt) => {
      setAltToShow(alt);
      console.log('alt', alt);
    }
    const showImage = (image) => {
      setImageToShow(image);
      setLightBoxDisplay(true);
    };
    const showLink = (link) => {
      setLinkShow(link);
    }
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
        <motion.div    drag={!isMobile}
        dragMomentum={true}
        tabIndex={1}
        initial={{ opacity: 0, scale: 0, left:'-200%', top:'unset'}}
        animate={{ opacity: 1, scale: 1, top:0, left:'100px'}}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, scale:0, left:'-200%', top:'unset'}}
        className="stacked absolute flex flex-col h-[90vh] sm:h-[80%] w-11/12 sm:w-full md:w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12   text-left  sm:!-left-[0px] rounded-lg" id="work" >
              <div className="imagesPre flex flex-row flex-nowrap align-top bg-gray-100  justify-between ">
                <div className="text-left w-10/12 ">work.exe</div>

                  <div className="w-[20px] h-[20px]  text-right text-white bg-red-400 rounded-full px-[4px] py-[2px] cursor-pointer"  onClick={params.toggle} >✕</div>
              </div>
                <div className="images bg-emerald-100 sm:w-full w-full  m-auto relative  overflow-auto rounded-b-lg" style={{'height':'-webkit-fill-available'}}>
                <div className="relative h-full flex flex-col overflow-auto p-5" >
          {projects.map((project) => (
            <div key={project.title} className="projectContainer mt-16 relative" >
            <div id={project.title} className="imagerow relative flex flex-row flex-wrap w-full white-bg  ">
              <div className="absolute -top-8 left-0 rounded-lg bg-gray-100 text-sm mx-auto font-bold text-gray-800 pt-2 px-10 pb-4"> > {project.category}
              </div>
              <div key={project.title} className="relative top-0 right-0 left-0 w-full  bg-gray-100 flex flex-nowrap flex-row items-end align-middle p-5 sm:text-xs md:text-sm">
                    <p className="text-gray-400 text-center tracking-[.25em] red-hat w-full flex flex-nowrap flex-row align-middle  text-xs">
                      <span className="w-auto ">{project.category}/</span><span className="w-auto  font-bold">{project.title}/</span><span className="w-auto text-left font-light">{project.description}</span>
                    </p>
                  </div>
            {project.content.map((c, i) => (
              <div key={i} className=" flex flex-col w-2/12 sm:w-full md:w-1/2 lg:w-3/12 xl:w-3/12 2xl:w-2/12 my-5 md:my-5 md:mx-0 sm:w-full ">
              <div className="cursor-zoom-in mx-auto justify-center align-center" onClick={() => {showImage(c.imageurl); showAlt(c.caption); showBlurb(c.year); showLink(c.link);}}>
              <LazyLoadImage placeholderSrc={placeHolder} className="thumbnail h-[150px] sm:h-[100px] md:h-[100px] lg:h-[100px] overflow-hidden object-cover align-center justify-center block m-auto text-center" src={c.imageurl} />
              </div>
                <p className="break-word w-6/12 text-center red-hat text-sm my-5 mx-auto inline-block">{c.imageurl.slice(18).slice(0, -4)} </p>
                  <p className="break-word w-6/12 text-center red-hat text-xs text-black mx-auto inline-block">{c.caption}</p>
                </div>
            ))}
            </div>
              </div>
          ))}
          </div>
        </div>
    </motion.div>
    {lightboxDisplay ?
      <div key={imageToShow} id="lightbox" className="w-full h-full"  onClick={hideLightBox} >
      <motion.div
       drag={!isMobile}
      exit={{ opacity: 0, scale:0, left:'-200%', top:'unset'}}
      dragMomentum={true}  id="lightboxWindow" className="bg-white rounded-md stacked absolute flex flex-col h-5/6 w-10/12 sm:!w-full md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-full   text-left  sm:!-left-[0px]" onClick={(e) => e.stopPropagation()}>
      <div className="imagesPre flex flex-row flex-nowrap align-top justify-between ">
      <div className="text-left w-11/12">{altToShow}</div>
      <div className="w-[20px] h-[20px]  text-right text-white bg-red-400 rounded-full px-[4px] py-[2px] cursor-pointer"  onClick={hideLightBox} >✕</div>
      </div>
      <img alt={altToShow} id="lightbox-img" src={imageToShow} style={{pointerEvents:'none'}} />
      <div className="text-center red-hat font-light text-black pt-5 pb-5">{blurbToShow}</div>
      {linkShow ? <div className="bg-green-400 w-[200px]  rounded-sm font-bold text-bold text-center red-hat font-light text-white  pt-3 pb-3 mt-5 mb-5 m-auto"><a href={linkShow} target="_blank" rel="noreferrer">full view &nbsp;<i className="fas fa-external-link-alt text-white"></i></a> </div> : ''  }
      </motion.div>
      </div>
  : ''}
  </>
  );
}

export default Work;
