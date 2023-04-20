// import React from "react";
import React, { useState, useContext, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Bootmenu from './components/Bootmenu';
import './App.css';
import {navLinks} from './data';
import { motion } from "framer-motion"
import SectionHeader from "./components/subcomponent/SectionHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";



const Navi = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 100)).then(() =>
    import('./components/Navi')
  );
});
const Footer = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 100)).then(() =>
    import('./components/Footer')
  );
});




export default function App() {



  return (

  <motion.div id="main" style={{height:'40000px'}} className="absolute fixed top-0 left-0 w-full h-full gradient drag-area text-gray-400  body-font ">

<div style={{height:'100vh'}} className="w-full absolute top-0 left-0 right-0 bottom-0">
<div className="flex flex-row align-middle content-between space-around justify-content h-full w-full align-center justify-content text-left px-24">
kalOS v 1.1


</div>
</div>

        <Suspense fallback={<Bootmenu />}>
        <Navi />
        <Footer />
      </Suspense>
    </motion.div>

  );
}
