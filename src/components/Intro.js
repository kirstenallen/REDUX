import React, { useState, useEffect } from 'react';





const Intro = params =>  {
  const header_text = "kirsten allen";
  const second_text = "we can make anything we want";
  const [headerText, setHeaderText] = useState("");
  const [secondText, setSecondText] = useState("");

  useEffect(() => {
    let headerTimeout;
    let secondTimeout;

    const animateText = (text, setText, timeout) => {
      let currentIndex = 0;
      timeout = setInterval(() => {
        setText((prevText) => {
          const updatedText = text.slice(0, currentIndex + 1);
          currentIndex++;
          return updatedText;
        });
        if (currentIndex === text.length) {
          clearInterval(timeout);
        }
      }, 500);
    };

    animateText(header_text, setHeaderText, headerTimeout);

    headerTimeout = setTimeout(() => {
      animateText(second_text, setSecondText, secondTimeout);
    }, 500 * header_text.length);

    return () => {
      clearInterval(headerTimeout);
      clearInterval(secondTimeout);
    };
  }, []);


  return (

    <div  id="intro" >
    <div style={{height:'100vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
      <div className="flex flex-col red-hat sm:flex-start justify-center h-full w-full align-center justify-content text-left px-24 sm:px-2">

        <h1 className=" gradient_text gradientshift p-0 m-0 text-white uppercase text-center raydis">{headerText}</h1>

        <p className="p-0 m-0  blue text-center sm:text-center tracking-widest">portfoliOS - v 1.0.3</p>
      </div>
    </div>

    <div style={{height:'100vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
    <div className="flex flex-col content-center justify-center align-middle content-between space-around justify-content h-full w-8/12 sm:w-10/12 md:w-8/12 mx-auto align-center justify-content text-left px-24 sm:px-0 sm:mx-auto">
    <h3 className=" gradient_text gradientshift  p-0 m-0 text-gray-100 text-center w-full sm:text-left md:text-left raydis">{secondText}</h3>
    </div>
    </div>

    <div style={{height:'100vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
    <div className="flex flex-col content-center justify-center align-middle content-between space-around justify-content h-full w-8/12 sm:w-10/12 md:w-8/12 mx-auto align-center justify-content text-left px-24 sm:px-0 sm:mx-auto">
    <h3 className=" gradient_text gradientshift  p-0 m-0 text-gray-100 text-center w-full sm:text-left md:text-left raydis">snoop<br/>around<br/>in<br/>the<br/>folders</h3>
    </div>
    </div>


       <div style={{height:'100vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
       <div className="flex flex-col content-center justify-center align-middle content-between space-around justify-content h-full w-8/12 sm:w-10/12 md:w-8/12 mx-auto align-center justify-content text-left px-24 sm:px-0 sm:mx-auto">
       <h3 className=" gradient_text gradientshift  p-0 m-0 text-gray-100 text-center w-full sm:text-left md:text-left raydis">no, stop that's enough scrolling</h3>
       </div>
       </div>

              <div style={{height:'100vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
              <div className="flex flex-col content-center justify-center align-middle content-between space-around justify-content h-full w-8/12 sm:w-10/12 md:w-8/12 mx-auto align-center justify-content text-left px-24 sm:px-0 sm:mx-auto">
              <h3 className=" gradient_text gradientshift  p-0 m-0 text-gray-100 text-center w-full sm:text-left md:text-left raydis">i'll never forget you</h3>
              </div>
              </div>

              <div style={{height:'100vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
              <div className="flex flex-col content-center justify-center align-middle content-between space-around justify-content h-full w-8/12 sm:w-10/12 md:w-8/12 mx-auto align-center justify-content text-left px-24 sm:px-0 sm:mx-auto">
              <h3 className=" gradient_text gradientshift  p-0 m-0 text-gray-100 text-center w-full sm:text-left md:text-left raydis">goodbye</h3>
              </div>
              </div>

              <div style={{height:'100vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
              <div className="flex flex-col content-center justify-center align-middle content-between space-around justify-content h-full w-8/12 sm:w-10/12 md:w-8/12 mx-auto align-center justify-content text-left px-24 sm:px-0 sm:mx-auto">
              <h3 className=" gradient_text gradientshift  p-0 m-0 text-gray-100 text-center w-full sm:text-left md:text-left raydis">goodbye</h3>
              </div>
              </div>

              <div style={{height:'800vh'}} className="w-full relative top-0 left-0 right-0 bottom-0">
              <div className="flex flex-col content-center justify-center align-middle content-between space-around justify-content h-full w-8/12 sm:w-10/12 md:w-8/12 mx-auto align-center justify-content text-left px-24 sm:px-0 sm:mx-auto">

              </div>
              </div>

              <div style={{height:'500vh'}} className="w-full relative bottom-[300px] left-0 right-0">
              <div className="flex flex-col content-center justify-end align-bottom content-between space-around justify-end h-full w-8/12 sm:w-10/12 md:w-8/12 mx-auto text-left px-24 sm:px-0 sm:mx-auto">
              <h3 className=" gradient_text_green gradientshift  p-0 m-0 text-center w-full sm:text-left md:text-left raydis">well,<br/>hello there</h3>
              </div>
              </div>

              </div>


  );
}

export default Intro;
