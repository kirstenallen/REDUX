import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence  } from "framer-motion";





const Dialup = params =>  {


  useEffect (() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


console.log(params.setDialupShow);

    let player;
    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player('player', {
        videoId: 'zL19uMsnpSU',
        events: {
          'onReady': onPlayerReady,
        },
        playerVars: {
          autoplay:1,
          mute:1,
          playsinline:1,
        },
      });
    };

const onPlayerReady = (event) => {
  event.target.playVideo();
}



});

  return (

    <>
    <motion.div drag
      dragMomentum={true}
  tabIndex={3}
        initial={{ opacity: 0, scale: 0, left:'-200%', top:'unset'}}
          animate={{ opacity: 1, scale: 1, top:0, left:'100px'}}
          transition={{ duration: 0.5 }}
           exit={{ opacity: 0, scale:0, left:'-50%', top:'unset'}}

          key="dialup"
     className="stacked absolute top-1/2 left-1/2 transform translate-x-1/2 w-8/12 h-5/6 translate-y-1/2 text-left sm:!-left-[0px] sm:w-full" id="dialup" >
              <div className="imagesPre flex flex-row flex-nowrap align-top ">
                <div className=" text-left w-8/12 ">internet.exe
              </div>

              <div className="w-4/12 inline-block text-right text-red-800" style={{zIndex:999}} onClick={params.toggle} >x</div>
                </div>

                <div className="images h-full bg-gray-200 red-hat sm:w-full py-10 px-10 m-auto relative overflow-auto">


                <div className="bg-red-500 w-full h-4"></div>
                <div className="py-5">
                <ul className="flex flex-row w-full space-between align-center justify-center justify-between ">

                {[...Array(5)].map((x, i) =>
                  <li className="w-[50px] h-4  bg-gray-300" key={i}></li>
                 )}


                </ul>
                </div>
                <div id="player"></div>

                </div>
       </motion.div>
    </>

  );
}

export default Dialup;
