import React from 'react';
    import { motion} from "framer-motion";





const Home = (props) => {

  const isMobile = window.innerWidth < 768;



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
              <div className="w-4/12 inline-block text-right text-red-400"  onClick={props.toggle} >x</div>
              </div>
              <div className="images !bg-black red-hat sm:w-full py-10 px-10 m-auto relative overflow-auto rounded-b-lg">
              <ul className="welcome">
              <li>hi</li>

              <li><a href="./imagesshrunk/kirstenallen_resume_2023.pdf" className="text-yellow-600 red-hat" target="_blank">resumé <span className="fas text-yellow-600 fas-lg fa-sticky-note"></span></a></li>
              <li>click the <span className="text-yellow-600 italic">folders</span></li>
              <li><span className="text-green-600">find the secret game</span></li>

              </ul>
              </div>
     </motion.div>

  </>
  )
}
export default Home;
