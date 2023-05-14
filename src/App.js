// import React from "react";
import React, { lazy, useState }from "react";
import { Suspense } from 'react';
import Bootmenu from './components/Bootmenu';
import './App.css';
    import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import './fonts/RAYDIS.ttf';



const Navi = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 3000)).then(() =>
    import('./components/Navi')
  );
});


// const Navi = lazy(() => import('./components/Navi'))
const Footer = lazy(() => import('./components/Footer'))
  const isMobile = window.innerWidth < 768;




const App = (props) => {


    const [skiFree, setSkiDisplay] = useState(false);

  return (
<>
    <motion.div id="main" className="absolute fixed top-0 left-0 w-full h-full gradient drag-area text-gray-400  body-font " style={{height:'20000px'}}>


  <Suspense fallback={<Bootmenu />}>

        <div style={{height:'100vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
          <div className="flex flex-col red-hat sm:flex-start justify-center h-full w-full align-center justify-content text-left px-24 sm:px-2">
            <div className="">
            <h1 className="p-0 m-0 text-white uppercase text-center raydis">kirsten<br/>allen</h1>
            </div>
            <p className="p-0 m-0 text-gray-500 text-center sm:text-center tracking-widest">portfoliOS - v 1.0.2</p>
          </div>
        </div>

        <div style={{height:'150vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
        <div className="flex flex-col content-center justify-center align-middle content-between space-around justify-content h-full w-8/12 sm:w-10/12 md:w-8/12 mx-auto align-center justify-content text-left px-24 sm:px-0 sm:mx-auto">
        <h3 className="p-0 m-0 text-gray-100 text-center w-full sm:text-left md:text-left raydis">we<br/>can<br/>make<br/>anything<br/>we<br/>want</h3>
        </div>
        </div>

        <div  onClick={() => setSkiDisplay(!skiFree)} id="skifree_disk" className="w-full h-[300px] stacked absolute left-0 right-0 bottom-10 sm:bottom-24 overflow-hidden" style={{ zIndex:'111'}}>
        <div className="flex flex-col flex-end justify-right content-right text-right red-hat" style={{height:'inherit'}}>
        <LazyLoadImage className="w-6/12 block self-end m-0 p-0" src="./imagesshrunk/floppy.gif"  style={{height:'inherit', width:'auto', cursor: 'pointer'}}/>
        </div>
        </div>



          <Navi/>

          <AnimatePresence initial={true} exit={true}>
                            {skiFree ?

                                <motion.div
                                drag={!isMobile}
                                  dragMomentum={!isMobile}
                                  tabIndex={5}
                                  initial={{ opacity: 0, scale: 0, bottom:'-100px',  right:0}}
                                  animate={{ opacity: 1, scale: 1, bottom: 100, right:300, zIndex:'777'}}
                                  transition={{ duration: 0.5 }}
                                  exit={{ opacity: 0, scale:0, right:0, bottom:'-100px'}}
                                  className=" stacked absolute w-[500px] h-[500px] text-left sm:!w-full sm:!-left-[0px] " id="skiifree">
                                      <div className="relative block w-full h-full mx-auto sm:w-full sm:h-full my-0 rounded-lg " style={{background:'#f7f7f7', pointerEvents:'all'}}>

                                      <div className="imagesPre flex flex-row relative block mx-auto rounded-t-md bg-green-500">
                                        <div className=" text-left w-10/12  ">SKIFREE.EXE</div>
                                        <div className="w-2/12 inline-block text-right text-white text-bold"  onClick={() => setSkiDisplay(!skiFree)} >x</div>
                                      </div>
                                      <div className="flex flex-col w-full h-minustop">
                                      <iframe className="w-full" src="https://basicallydan.github.io/skifree.js/" title="SkiFree game by Daniel Hough"style={{'height':'inherit'}}></iframe>
                                      </div>
                                      </div>
                                  </motion.div>

                             :  '' }
            </AnimatePresence>


          <Footer />



            </Suspense>



    </motion.div>


      </>


  );
}

export default App;
