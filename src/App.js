// import React from "react";
import React, { lazy }from "react";
import { Suspense } from 'react';
import Bootmenu from './components/Bootmenu';
import './App.css';
import { motion } from "framer-motion"
import { LazyLoadImage } from "react-lazy-load-image-component";



const Navi = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 2000)).then(() =>
    import('./components/Navi')
  );
});


// const Navi = lazy(() => import('./components/Navi'))
const Footer = lazy(() => import('./components/Footer'))





export default function App() {



  return (

    <motion.div id="main" className="absolute fixed top-0 left-0 w-full h-full gradient drag-area text-gray-400  body-font " style={{height:'20000px'}}>



        <div style={{height:'100vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
        <div className="flex flex-col red-hat sm:flex-start md:justify-start md:pt-9 justify-center h-full w-full align-center justify-content text-left px-24">
        <h1 className="p-0 m-0 md:text-black text-black text-center sm:text-left md:text-left leading-8">kirsten allen</h1>
        <p className="p-0 m-0 md:text-black text-black text-center sm:text-left md:text-left">portfoliOS - v 1.0.1</p>
        </div>
        </div>
        <div style={{height:'150vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
        <div className="flex flex-col red-hat content-center justify-center align-middle content-between space-around justify-content h-full w-5/12 sm:w-10/12 md:w-8/12 mx-auto align-center justify-content text-left px-24">
        <h1 className="p-0 m-0 text-gray-100 text-center sm:text-left md:text-left">we can make anything we want</h1>
        </div>
        </div>
        <div id="skifree_disk" className="w-full h-[300px] absolute left-0 right-0 bottom-10 sm:bottom-24 overflow-hidden">
        <div className="flex flex-col flex-end justify-right content-right text-right red-hat" style={{height:'inherit'}}>
        <LazyLoadImage className="w-6/12 block self-end m-0 p-0" src="./imagesshrunk/floppy.gif"  style={{height:'inherit', width:'auto'}}/>
        </div>
        </div>
  <Suspense fallback={<Bootmenu />}>
          <Navi />
          <Footer />

            </Suspense>

    </motion.div>


  );
}
