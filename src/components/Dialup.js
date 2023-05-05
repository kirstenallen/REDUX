import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';




const Dialup = params =>  {
const [dialupVisible , setDialupVisible] = useState(true);
const [formVisible, setFormVisible] = useState(false);

const isMobile = window.innerWidth < 768;



  useEffect(() => {
    let debounce;

    if (debounce) {
        clearTimeout(debounce);
        debounce = null;
    }
    debounce = setTimeout(() => {
  var connectingId = document.getElementById('connecting');
      connectingId.classList.add('text-green-500');
      connectingId.innerHTML = "you've got mail!";
      connectingId.classList.remove('text-orange-500');

        console.log('timeout 1');
    }, 6000);


    debounce = setTimeout(() => {
        setDialupVisible(false);
        setFormVisible(true);
        var dialUpContainer = document.getElementById('dialup');
        dialUpContainer.style.height = "75%";
        console.log('timeout 2');
    },8000);
    return() => clearTimeout(debounce);

});


const stopGlimmer = (e) => {
   var textArea = document.getElementById('textArea');
   console.log('removing glimmer effect');
   textArea.classList.remove('glimmer');
 };


  return (

    <>
        <motion.div drag={!isMobile}
        dragMomentum={true}
        tabIndex={3}
        initial={{ opacity: 0, scale: 0, left:'-200%', top:'unset'}}
        animate={{ opacity: 1, scale: 1, top:0, left:'100px'}}
        transition={{ duration: 0.5 }}
         exit={{ opacity: 0, scale:0, left:'-50%', top:'unset'}}
        key="dialup"
        className="stacked absolute flex flex-col w-6/12 h-[60%] sm:h-[60%] lg:w-10/12 xl:w-10/12 md:w-10/12 sm:w-full h-5/6  text-left  sm:!-left-[0px] rounded-md bg-gray-100" id="dialup" >

              <div className="imagesPre flex flex-row flex-nowrap align-top">
                <div className="text-left w-10/12 ">internet.exe</div>
                <div className="w-2/12 inline-block text-right text-red-400" onClick={params.toggle} >x</div>
              </div>


              <div className="images bg-purple-100 sm:w-full w-full  m-auto relative  rounded-b-md overflow-auto " style={{'height':'-webkit-fill-available'}}>

        {dialupVisible ?
          <div className="relative h-full flex flex-col overflow-auto p-5">
          <div className="flex flex-col justify-center" style={{'height':'inherit'}}>
          <div className="bg-white w-full h-2/6 flex flex-row align-items-center rounded-lg drop-shadow-lg">
          {[...Array(3)].map((x, i) =>
            <li className="list-none w-full space-between justify-center rounded-sm align-middle m-2 p-1 bg-slate-300 " key={i}>
            <div className="list-none relative h-full w-full rounded-sm" style={{'backgroundColor':'#cdcefd'}}>
                  {i === 2 ?
                  <div className="flex  w-full h-full items-center align-middle justify-middle justify-center block ">
                  <Spline  scene="https://prod.spline.design/4cYqVhXffG4uLh7O/scene.splinecode" />
                  </div>
                  : '' }
                  {i === 1 ?
                  <div className="flex  w-full h-full items-center align-middle justify-middle justify-center block">
                  <Spline  scene="https://prod.spline.design/V9ge0y-dSic9gFnT/scene.splinecode" />
                  </div>
                  : '' }
                  {i === 0 ?
                  <div className="flex  w-full h-full items-center align-middle justify-middle justify-center block">
                 <Spline scene="https://prod.spline.design/RELPFmFBGsH55b1Z/scene.splinecode" />
                  </div>
                  : '' }
            </div>
            </li>
           )}
          </div>
          <div id="connecting" className="block relative w-full pt-10 text-center text-orange-500 animate-bounce">connecting ... </div>

          </div>
        </div>
           : ''}


          {formVisible ?
            <>
            <div className="relative h-full flex flex-col overflow-auto p-5">
            <div className="bg-white mt-12 w-full flex flex-col align-items-center rounded-lg drop-shadow-lg">
            <div className="absolute -top-7 -left-2 text-green-400 m-auto text-lg" style={{zIndex:'555'}}>
            ●
            </div>
            <div className="relative left-0 right-0  bg-indigo-500  py-2 px-2 rounded-t-md text-white red-hat tracking-tighter text-sm">email messenger v 1.0.2</div>
            <div className="w-11/12 mx-auto my-0 red-hat">
            <p className="inline-block mb-0 p-5"><p className=" inline-block text-indigo-500 ">kirsten:</p> Hi there! Thanks for visiting my portfolio - if you'd like to contact me feel free to leave me a message below! </p>
            </div>
            </div>
            <br/><br/>
            <div className="flex flex-col justify-center" >
              <div className="bg-white w-full flex flex-col rounded-lg drop-shadow-lg">
              <div className="relative left-0 right-0  bg-indigo-500  py-2 px-2 rounded-t-md text-white red-hat tracking-tighter text-sm">email messenger v 1.0.2</div>
              <form className="w-11/12 mx-auto my-0"
              action="https://formspree.io/xbjjpddq"
              method="POST">
              <label hidden>
            your email address
              </label>
              <input className=" red-hat w-full border-solid border-2 border-white border-b-indigo-500  my-5" type="text" name="_replyto" placeholder="screenname@email.net" />
              <br/>
              <label hidden>
            your message
              </label>
              <textarea id="textArea" className="red-hat w-full border-solid border-2 border-white border-b-indigo-500 h-[200px] mb-5 align-top glimmer" name="message" onClick={stopGlimmer} placeholder="..."></textarea>
              <br/>
              <button type="submit" className="red-hat bg-indigo-500 text-white px-5 py-3 text-right align-right float-right border-indigo-500 rounded-md">send</button>
              </form>
              </div>
              </div>
              </div>
              </>
              : ''}


              </div>
       </motion.div>
       </>


  );
}

export default Dialup;
