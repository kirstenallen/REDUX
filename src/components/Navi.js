import React, { useRef, useState, useContext } from "react";
import { projects } from "../data";
import Spline from '@splinetool/react-spline';
    import { motion, AnimatePresence  } from "framer-motion";
import {navLinks} from "../data";
import {useEffect} from 'react';
import {animatedImagesArray} from "../data";
import Home from './Home';
import Work from './Work';
import About from './About';



export default function Navi() {

  let ratioContainer = "";


  useEffect(() => {

    var scrollRotation = debounce(function() {
    var scrollTop = window.scrollY;
    const step = 100;
    var totalHeight = document.getElementById('main').offsetHeight - step * .9;
    var imageContainer = document.getElementById('aniImage');
    let ratioContainer = Math.floor(scrollTop  / totalHeight * 85 );
      if (ratioContainer) {
        imageContainer.src = animatedImagesArray[ratioContainer];
          console.log(ratioContainer);
          return ratioContainer;
        if (ratioContainer <= 2 ) {
          imageContainer.src = animatedImagesArray[1];
          console.log('no top left');
        }
      }
  }, 100);
  function debounce(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  };
  function topTop() {
      window.scrollTo(0,0);
  }
  window.addEventListener('scroll', scrollRotation);
  window.addEventListener('onClick', topTop);
  })

  const [testState, setTestState] = useState('im a test');

  const [showHome, setHomeShow] = useState(true);
  const [showAbout, setAboutShow] = useState(false);
  const [showWork, setWorkShow] = useState(false);


const canvasRef = useRef(null);

  const classToggle = () => {
    setHomeShow(prevValue => !prevValue);
    console.log(setHomeShow);
  };

return (

  <div className=" fixed top-0 left-0 flex align-top  w-full h-full text-gray-400  body-font overflow-hidden">
  <ul className="navLinks absolute sm:top-0 sm:w-auto sm:m-auto text-right w-1/12 dock opacity-100">
  <div className="sm:hidden aniScrollContainer">
   <a onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
<img id="aniImage" src="../imagesshrunk/computer_0001.png" />
</a>
  </div>
{navLinks.map((navLink) => (
  <li className="sm:inline-block align-top text-center m-auto mb-4 px-1 py-1 "  style={{"width" : "auto"}} key={navLink.title}>
  <div className="navItem">

  {    navLink.title === 'console' &&

  <a onClick={() => {setHomeShow(!showHome)}}>
  <Spline scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
  <span className="text-gray-800 m-auto text-xs text-center uppercase border-b-2 border-solid border-gray-800">
  {navLink.title}
  </span>
    </a>

 ||
      navLink.title === 'work' &&

      <a onClick={() => setWorkShow(!showWork)}>
      <Spline scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
      <span className="text-gray-800 m-auto text-xs text-center uppercase border-b-2 border-solid border-gray-800">
      {navLink.title}
      </span>
        </a>

  ||

      navLink.title ==='about' &&
      <a onClick={() => setAboutShow(!showAbout)}>
      <Spline scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
      <span className="text-gray-800 m-auto text-xs text-center tracking-[.25em] uppercase border-b-2 border-solid border-gray-800">
      {navLink.title}
      </span>
        </a>
    }







  </div>
  </li>

))}
</ul>
    <AnimatePresence initial={true}>
    {showHome ?
    <Home  toggle={classToggle} setHomeShow={showHome} setTestState={testState} />
    : null}
   </ AnimatePresence>

   <AnimatePresence initial={true}>
  {showWork ? <Work  toggle={classToggle} setHomeShow={showHome} setTestState={testState} /> : ''}
  </ AnimatePresence>

  <AnimatePresence initial={true}>
  {showAbout ? <About  toggle={classToggle} setHomeShow={showHome} setTestState={testState}/> : ''}
  </ AnimatePresence>

  </div>

//
// <div className="navLinks sm:top-0 m-auto block ">
//
//
//
//   <ul className="absolute sm:top-0 sm:w-auto sm:m-auto text-right w-1/12 dock">
//   <div className="sm:hidden aniScrollContainer">
//   <a href="">
// <img id="aniImage" src="../imagesshrunk/computer_0001.png" />
// </a>
//   </div>
//   <li className="sm:inline-block align-top text-center m-auto mb-4 px-1 py-1 "  style={{"width" : "auto"}} key='about'>
//   <div className="navItem">
//   <a>
//      <Spline scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
//   <span className="courier-prime m-auto text-xs uppercase border-b-2 border-solid border-gray-200 px-1 py-1">
//   about
//   </span>
//     </a>
//   </div>
//   </li>
//
//   <li className="sm:inline-block align-top text-center m-auto mb-4 px-1 py-1 "  style={{"width" : "auto"}} key='work'>
//   <div className="navItem">
//   <a>
//    <Spline scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
//   <span className="courier-prime m-auto text-xs uppercase border-b-2 border-solid border-gray-200 px-1 py-1">
//   work
//   </span>
//     </a>
//   </div>
//   </li>
//
//
//   <li className="sm:inline-block align-top text-center m-auto mb-4 px-1 py-1 "  style={{"width" : "auto"}} key='console'>
//   <div className="navItem">
//   <a>
//    <Spline scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
//   <span className="courier-prime m-auto text-xs uppercase border-b-2 border-solid border-gray-200 px-1 py-1">
//  console
//   </span>
//     </a>
//   </div>
//   </li>
//
//
// </ul>
//   </div>
)
}
