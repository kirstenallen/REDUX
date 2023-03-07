  import React, { useEffect, useState } from "react";
    import { motion, useCycle } from "framer-motion";
    const variants = {
      open: { opacity: 1 },
      closed: {opacity:0 },
    }


export default function About() {
const [isOpen, toggleOpen] = useCycle(true, false);

const [isActive, setActive] = useState(true);

const updateZLayer = () => {
     let workWindow = document.getElementById('work');
  if (isActive) {

      workWindow.style.zIndex='999';

  } else {
    workWindow.style.zIndex='1';
  }
}


return (

<motion.div drag
dragMomentum={true}
whileFocus={{ zIndex: 999 }}
  whileTap={{ zIndex: 999 }}
  initial= {true }
  exit={{zIndex:999}}
  initial={{ opacity: 0, scale: 0.5, left:'-100%', top:'unset'}}
    animate={{ opacity: 1, scale: 1, top:0, left:'100px'}}
    exit={{ opacity: 0, scale: 0.5, left:'-100%', top:'unset'}}
    transition={{ duration: 0.5 }}

className="container w-12/12    relative text-center " id="about" >
    <div className="container w-full relative mx-auto text-center ">
        <div className="imagesPre flex  flex-row flex-nowrap align-middle content-between">
          { isActive ? 'workWindow is active' : '' }

          <div className="courier-prime text-left w-10/12 ">section information here</div>
          <div className="text-right w-2/12 ">x</div>
        </div>
    <div className="images bg-blue-100   sm:w-full  m-auto relative overflow-auto">
          <div className="social sticky top-0 grid grid-cols-9 gap-1 content-evenly mx-auto bg-gray-200 py-5">
          <a href="https://codepen.io/kirstenallen">
          <span className="fab text-black fa-lg fa-codepen"></span>
          </a>
          <a href="https://github.com/kirstenallen">
          <span className="fab text-black fa-lg  fa-github"></span>
          </a>
          <a href="https://soundcloud.com/knellbell">
          <span className="fab text-black fa-lg fa-soundcloud"></span>
          </a>
          <a href="https://kallenillustration.tumblr.com/">
          <span className="fab text-black fa-lg fa-tumblr"></span>
          </a>
          <a href="mailto:kirsten@kallenillustration.com;">
          <span className="far text-black fa-lg fa-envelope"></span>
          </a>
          <a href="https://dribbble.com/kallenillu">
          <span className="fab text-black fa-lg fa-dribbble"></span>
          </a>
          <a href="https://linkedin.com/in/kallenillu">
          <span className="fab text-black fa-lg fa-linkedin"></span>
          </a>
          <a href="https://www.twitch.tv/kirstentinkers">
          <span className="fab text-black  fa-lg fa-twitch"></span>
          </a>
          <a href="https://www.instagram.com/kallenillu/">
          <span className="fab text-black fa-lg fa-instagram"></span>
          </a>
          </div>
      <div className="w-10/12 mx-auto text-gray-900">
          <br/>
          <br/>
          Kirsten is a graphic designer and front end developer living in Austin, TX looking for <span className="bold code-green">remote</span> work.
          <br/>
          <br/>
            <h1 className="sm:text-4xl text-4xl font-medium title-font mb-4 text-gray-900">
            <div className="sectionHeader courier-prime text-xl"><p>experience / hobbies</p></div>
            </h1>
            <br/>
            <br/>
            <ul className="text-left list-disc grid grid-cols-2 mx-auto block w-8/12">
            <li>graphic design</li>
            <li>illustration</li>
            <li>motion graphics</li>
            <li>front-end developer</li>
            <li>3D design</li>
            <li>juggling</li>
            <li>carpentry</li>
            <li>stand up comedy</li>
            </ul>
            <br/>
            <h1 className="sm:text-4xl text-4xl font-medium title-font mb-4 text-gray-900">
            <div className="sectionHeader courier-prime text-xl"><p>specifics</p></div>
            </h1>
            <br/>
            <br/>
            <ul className="text-left list-disc grid grid-cols-2 mx-auto block w-8/12">
            <li>Full Adobe Creative Suite Mastery</li>
            <li>Photoshop / Illustrator / After Effects / XD / InDesign etc.</li>
            <li>Blender / Maxon Cinema 4D</li>
            <li>Github / VS Code</li>
            <li>HTML / CSS / JS / Node / React</li>
            <li>Microsoft Office Suite / Google Docs / Sheets / Etc</li>
            <li>Asana / Wrike / Airtable</li>
            <li>also a big video game nerd</li>
            </ul>
            <br/>
        </div>
        <h1 className="sm:text-4xl text-4xl font-medium title-font mb-4 text-gray-900">
        <div className="sectionHeader courier-prime text-xl"><p>Get in touch:</p></div>
        </h1>
      <form className="w-6/12 mx-auto"
        action="https://formspree.io/xbjjpddq"
        method="POST">
        <label hidden>
        Your email:
        </label>
        <input className="border-solid bd-white courier-prime w-full px-0 py-5 my-10" type="text" name="_replyto" placeholder="your email" />
        <br/>
        <label hidden>
        Your message:
        </label>
        <textarea className="courier-prime w-full px-0 py-10" name="message" placeholder="your message"></textarea>
        <br/>
        <button type="submit">Send</button>
      </form>
<div className="placeholder"></div>
      <div className="sectionHeader courier-prime">
      <p>Made You Look.</p>
        <br/>
        <br/>
      </div>
      </div>
      </div>
      </motion.div>

)
}
