import React, { useState, lazy } from "react";
import { Suspense } from 'react';
// import Spline from '@splinetool/react-spline';
import { AnimatePresence  } from "framer-motion";
import {navLinks} from "../data";
import {useEffect} from 'react';
import {animatedImagesArray} from "../data";
import Home from './Home';
import Work from './Work';
import About from './About';
import Dialup from './Dialup';
import Clock from "./Clock";
import { placeHolder } from "../data";

//
// const SplineRuntime = lazy(() => import('@splinetool/react-spline'))


const SplineRuntime = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve,1)).then(() =>
    import('@splinetool/react-spline')
  );
});


const Navi = (props) => {

  const [stateColor, setStateColor] = useState('gray');
  const [showHome, setHomeShow] = useState(false);
  const [showAbout, setAboutShow] = useState(false);
  const [showWork, setWorkShow] = useState(false);
  const [showDialup, setDialupShow] = useState(false);


  useEffect(() => {
    var scrollRotation = debounce(function() {
    var scrollTop = window.scrollY;
    const step = 100;
    var totalHeight = document.getElementById('main').offsetHeight - step * .9;
    var imageContainer = document.getElementById('aniImage');
    let ratioContainer = Math.floor(scrollTop  / totalHeight * 85 );

      if (ratioContainer) {
        imageContainer.src = animatedImagesArray[ratioContainer];
          // console.log(ratioContainer);
          return ratioContainer;

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

var listenScroll = e => {
    if (window.scrollY > 12000) {
      setStateColor('white')
    } else {
      setStateColor('gray')
    }
  }
    window.addEventListener('scroll', listenScroll);


  })





// Close windows by id
  const classToggle = (e) => {

    let a = e.currentTarget.parentElement.parentElement.id;
    let b = e.currentTarget.parentElement.parentElement;

      b.style.zIndex = 0;

      if (a === 'console') {
          // console.log('console', a);
            setHomeShow(prevValue => !prevValue);

      } else if (a === 'work') {
          // console.log('work', a);
            setWorkShow(prevValue => !prevValue);
      } else if (a === 'about')  {
          // console.log('about', a);
            setAboutShow(prevValue => !prevValue);
      } else if (a === 'dialup') {
        setDialupShow(prevValue => !prevValue);
      }
        };
return (

<>
  <div className=" fixed top-0 left-0 flex align-top  w-full h-full text-gray-400 overflow-hidden">

      <ul className="navLinks dock absolute top-20 w-1/12 text-right sm:bottom-10 sm:w-full sm:left-0 sm:text-center" style={{pointerEvents:'all'}}>

      <div className="aniScrollContainer sm:hidden">
        <div className="cursor-pointer" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
        <img alt="Scroll to Top" id="aniImage" src="../imagesshrunk/computer_0001.png" />
        </div>
      </div>

      <div className="sm:hidden">
        <Clock />
      </div>

<Suspense fallback={<div className="red-hat"><img className="!w-[25px] !h-[25px] mx-auto block" src={placeHolder} /></div>}>

            {navLinks.map((navLink) => (
            <li id={navLink.title} className="hover:translate-x-6 border-solid hover:border-transparent border-black border-b sm:hover:translate-x-0 sm:hover:-translate-y-0 transition-all transform-gpu cursor-pointer sm:inline-block sm:px-2 sm:py-2 align-top text-center mx-auto pb-4  "   key={navLink.title}>
            <div className="navItem relative">


            {    navLink.title === 'console' &&
          <div onClick={() => {setHomeShow(!showHome)}} >
            <SplineRuntime scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
            <div className="absolute top-2 left-5 text-green-400 m-auto text-xs  ">
            {showHome ? '●' : null }
            </div>
            <div style={{ color: '' + stateColor + ''}} className="cursor-pointer rounded-sm  pb-0 text-gray-500 m-auto text-xs red-hat tracking-widest text-center uppercase">
            {navLink.title}
            </div>
          </div>
            ||
            navLink.title === 'work' &&
        <div onClick={() => setWorkShow(!showWork)}>
            <SplineRuntime  scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
            <div className="absolute top-2 left-5 text-green-400 m-auto text-xs  ">
            {showWork ? '●' : null }
            </div>
            <div style={{ color: '' + stateColor + ''}} className="cursor-pointer rounded-sm  pb-0 text-gray-500 m-auto text-xs red-hat tracking-widest text-center uppercase">
            {navLink.title}
            </div>
        </div>
            ||
            navLink.title ==='about' &&
          <div onClick={() => setAboutShow(!showAbout)} >
            <SplineRuntime  scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
            <div className="absolute top-2 left-5 text-green-400 m-auto text-xs   ">
            {showAbout ? '●' : null }
            </div>
            <div style={{ color: '' + stateColor + ''}} className="cursor-pointer rounded-sm  pb-0 text-gray-500 m-auto text-xs red-hat tracking-widest text-center uppercase">
            {navLink.title}
            </div>
        </div>
            ||
            navLink.title ==='contact' &&
          <div onClick={() => setDialupShow(!showDialup)}>
            <SplineRuntime  scene="https://prod.spline.design/4cYqVhXffG4uLh7O/scene.splinecode" />
            <div className="absolute top-2 left-5 text-green-400 m-auto text-xs   ">
            {showDialup ? '●' : null }
            </div>
            <div style={{ color: '' + stateColor + ''}} className="cursor-pointer rounded-sm  pb-0 text-gray-500 m-auto text-xs red-hat tracking-widest text-center uppercase">
            {navLink.title}
            </div>
        </div>
            }
            </div>
            </li>
            ))}

</Suspense>
            </ul>





                          <AnimatePresence initial={true}>
                          {showHome ?
                          <Home toggle={classToggle} setHomeShow={showHome}/>
                          : ''}
                          </ AnimatePresence>

                          <AnimatePresence initial={true}>
                          {showWork ? <Work toggle={classToggle} setWorkShow={showWork} /> : ''}
                          </ AnimatePresence>

                          <AnimatePresence initial={true}>
                          {showAbout ? <About toggle={classToggle} setAboutShow={showAbout}/> : ''}
                          </ AnimatePresence>

                          <AnimatePresence initial={true}>
                          {showDialup ? <Dialup toggle={classToggle} setDialupShow={showDialup} /> : ''}
                          </ AnimatePresence>



  </div>
</>
)
}

export default Navi;
