import React, { useState } from 'react';
    import { motion, AnimatePresence  } from "framer-motion";



const Home = params => {
  return (
  <>
  <motion.div drag
    dragMomentum={true}
tabIndex={0}
      initial={{ opacity: 0, scale: 0, left:'-200%', top:'unset'}}
        animate={{ opacity: 1, scale: 1, top:0, left:'100px'}}
        transition={{ duration: 0.5 }}
         exit={{ opacity: 0, scale:0, left:'-50%', top:'unset'}}

        key="console"
   className="stacked absolute top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2 text-left " id="console" >
            <div className="imagesPre flex flex-row flex-nowrap align-top ">
              <div className=" text-left w-8/12 ">console.exe
            </div>
                <div className="w-4/12 inline-block text-right text-red-800" style={{zIndex:999}} onClick={params.toggle} >x</div>
              </div>
              <div className="images bg-black red-hat sm:w-full py-10 px-10 m-auto relative overflow-auto">
              <ul className="welcome">
              <li>hi</li>
              <li><a>resume</a></li>
              <li>social media information</li>
              <li>keep scrolling down <span className="code-green">for more</span> or</li>
              <li>click the <span className="code-yellow italic">folders</span></li>
              </ul>
              </div>
     </motion.div>
  </>
  )

}

export default Home;

//
// export default function Home() {
//
//
// return (
// <>
//           <div className="imagesPre flex  flex-column flex-wrap align-top ">
//             <div className=" text-left w-12/12 ">welcome.exe {testState}
//             </div>
//             </div>
//             <div className="images bg-black  courier-prime sm:w-full py-10 px-10 m-auto relative overflow-auto">
//             <ul className="welcome">
//             <li>hi</li>
//             <li><a>resume</a></li>
//             <li>social media information</li>
//             <li>keep scrolling down <span className="code-green">for more</span> or</li>
//             <li>click the <span className="code-yellow italic">folders</span></li>
//             </ul>
//             </div>
// </>
// )
// }
