import React, { useState } from 'react';
    import { motion, AnimatePresence } from "framer-motion";





const Home = (params, props) => {

  const isMobile = window.innerWidth < 768;

  const [secretCode,setSecret] = useState("");
  const [skiFree, setSkiDisplay] = useState(false);


const checkSecret = (event) => {
  var inputCheck = document.getElementById('secretInput');
  inputCheck.classList.add('border-b-yellow-500');
  inputCheck.classList.remove('border-b-indigo-500')
  console.log(inputCheck);
 event.preventDefault();
  if (secretCode === 'skifree') {
    setSkiDisplay(true);
  inputCheck.classList.add('border-b-green-500');
  } else {
    inputCheck.classList.add('border-b-yellow-500');
    inputCheck.classList.remove('border-b-indigo-500');
      inputCheck.classList.remove('border-b-green-500')
  }
}

  return (
  <>
  <motion.div drag={!isMobile}
  dragMomentum={true}
  tabIndex={0}
  initial={{ opacity: 0, scale: 0, left:'-200%', top:'unset'}}
  animate={{ opacity: 1, scale: 1, top:0, left:'100px'}}
  transition={{ duration: 0.5 }}
  exit={{ opacity: 0, scale:0, left:'-50%', top:'unset'}}
  key="console"
  className="stacked absolute w-4/12 text-left sm:w-full sm:!-left-[0px] rounded-lg" id="console">
            <div className="imagesPre flex flex-row flex-nowrap align-top bg-gray-100 ">
              <div className=" text-left w-8/12 ">console.exe</div>
              <div className="w-4/12 inline-block text-right text-red-400"  onClick={params.toggle} >x</div>
              </div>
              <div className="images !bg-black red-hat sm:w-full py-10 px-10 m-auto relative overflow-auto rounded-b-lg">
              <ul className="welcome">
              <li>hi</li>
              <li><a href="./imagesshrunk/kirstenallen_resume_2023.pdf" className="text-yellow-600 red-hat" target="_blank">resumé <span className="fas text-yellow-600 fas-lg fa-sticky-note"></span></a></li>
              <li>scroll the background</li>
              <li>click the <span className="text-yellow-600 italic">folders</span></li>
              <li><span className="text-green-600">find the secret code</span></li>
              <li>
              <form className="inline-block relative" onSubmit={checkSecret}>
              <input id="secretInput" className="inline-block bg-black border-2 border-black border-b-indigo-500" type="text" value={secretCode} onChange={(e) => setSecret(e.target.value)} />
              </form>
              </li>
              </ul>
              </div>
     </motion.div>



    {skiFree ?
        <AnimatePresence initial={true}>
      <motion.div
      drag={!isMobile}
        dragMomentum={true}
        tabIndex={1}
        initial={{ opacity: 0, scale: 0, left:'-200%', top:'unset'}}
        animate={{ opacity: 1, scale: 1, top:0, left:'100px', zIndex:'777'}}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, scale:0, left:'-50%', top:'unset'}}
        className=" stacked  w-8/12 h-5/6 text-left sm:w-full sm:!-left-[0px] " id="skiifree">
            <div className="relative block w-full h-full mx-auto sm:w-full sm:h-full my-0 rounded-lg " style={{background:'#f7f7f7', pointerEvents:'all'}}>

            <div className="imagesPre flex flex-row relative block mx-auto rounded-md">
              <div className=" text-left w-10/12  ">SKIFREE.EXE by Dan Hough </div>
              <div className="w-2/12 inline-block text-right text-red-400"  onClick={() => setSkiDisplay(!skiFree)} >x</div>
            </div>
            <div className="w-full h-[98%] ">
            <iframe className="w-full" src="https://basicallydan.github.io/skifree.js/" title="SkiFree game by Daniel Hough"style={{'height':'inherit'}}></iframe>
            </div>
            </div>
        </motion.div>
        </AnimatePresence>
       : '' }
  </>
  )
}
export default Home;
