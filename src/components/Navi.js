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
import Dialup from './Dialup';
import Clock from "./Clock";


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



  const [showHome, setHomeShow] = useState(false);
  const [showAbout, setAboutShow] = useState(false);
  const [showWork, setWorkShow] = useState(false);
  const [showDialup, setDialupShow] = useState(false);


  document.querySelectorAll('.stacked').forEach(el => {
    el.addEventListener('click', () => {
      el.style.zIndex++
      console.log('test clickers');
    })
  })



  const classToggle = (e) => {
    let a = e.currentTarget.parentElement.parentElement.id;

if (a === 'console') {
    console.log('console', a);
      setHomeShow(prevValue => !prevValue);
} else if (a === 'work') {
    console.log('work', a);
      setWorkShow(prevValue => !prevValue);
} else if (a === 'about')  {
    console.log('about', a);
      setAboutShow(prevValue => !prevValue);
} else if (a === 'dialup') {
  setDialupShow(prevValue => !prevValue);
}
  };

return (

<>
  <div className=" fixed top-0 left-0 flex align-top  w-full h-full text-gray-400  body-font overflow-hidden">


  <ul className="navLinks absolute top-20 w-1/12 text-right dock opacity-100   sm:absolute sm:bottom-8 sm:w-full sm:h-28 sm:left-0 sm:text-center">
  <div className="sm:hidden aniScrollContainer">
   <a onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
<img id="aniImage" src="../imagesshrunk/computer_0001.png" />
</a>
  </div>

  <Clock />
  <hr/>


{navLinks.map((navLink) => (

  <li id={navLink.title} className="sm:inline-block align-top text-center mx-auto  "   key={navLink.title}>
  <div className="navItem">

  {    navLink.title === 'console' &&

  <a className="relative">
  <Spline onClick={() => {setHomeShow(!showHome)}} scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
  <div className=" absolute width-full height-full top-4    text-white m-auto text-xs  ">
  {showHome ? '●' : null }
  </div>
  <span className="text-white m-auto text-xs text-center uppercase  ">
  {navLink.title}
  </span>
    </a>

 ||
      navLink.title === 'work' &&

      <a className="relative">
      <Spline onClick={() => setWorkShow(!showWork)} scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
      <div className=" absolute width-full height-full top-4    text-white m-auto text-xs  ">
      {showWork ? '●' : null }
      </div>
      <span className="text-white m-auto text-xs text-center uppercase  ">
      {navLink.title}
      </span>

        </a>

  ||

      navLink.title ==='about' &&
      <a className="relative">
      <Spline onClick={() => setAboutShow(!showAbout)} scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
      <div className="absolute width-full height-full top-4    text-white m-auto text-xs   ">
      {showAbout ? '●' : null }
      </div>
      <span className="text-white m-auto text-xs text-center uppercase  ">
      {navLink.title}
      </span>
        </a>

  ||

  navLink.title ==='dialup' &&
  <a className="relative">
  <Spline onClick={() => setDialupShow(!showDialup)} scene="https://prod.spline.design/4cYqVhXffG4uLh7O/scene.splinecode" />
  <div className="absolute width-full height-full top-4    text-white m-auto text-xs   ">
  {showDialup ? '●' : null }
  </div>
  <span className="text-white m-auto text-xs text-center uppercase  ">
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
    <Home toggle={classToggle} setHomeShow={showHome}   />
    : null}
   </ AnimatePresence>

   <AnimatePresence initial={true}>
  {showWork ? <Work toggle={classToggle} setWorkShow={showWork} /> : ''}
  </ AnimatePresence>

  <AnimatePresence initial={true}>
  {showAbout ? <About toggle={classToggle} setAboutShow={showAbout}  /> : ''}
  </ AnimatePresence>

  <AnimatePresence initial={true}>
  {showDialup ? <Dialup toggle={classToggle} setDialupShow={showDialup}  /> : ''}
  </ AnimatePresence>


  </div>
</>
)
}
