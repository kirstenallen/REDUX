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

  <motion.div id="main" style={{height:'4000px'}} className="absolute fixed top-0 left-0 w-full h-full gradient drag-area text-gray-400  body-font ">
        <Suspense fallback={<Bootmenu />}>
        <Navi />
        <Footer />
      </Suspense>
    </motion.div>

  );
}
