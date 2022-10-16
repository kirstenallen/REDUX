
import { projects } from "../data";
import Spline from '@splinetool/react-spline';
import {navLinks} from "../data";
import {useEffect} from 'react';
import {animatedImagesArray} from "../data";

export default function Navi() {

let ratioContainer = "";

useEffect(() => {

  var scrollRotation = debounce(function() {
  var scrollTop = window.scrollY;
  const step = 100;
  var totalHeight = document.getElementById('main').offsetHeight - step * .9;
  var imageContainer = document.getElementById('aniImage');
  let ratioContainer = Math.floor(scrollTop  / totalHeight * 85 );
    if (ratioContainer) {
      imageContainer.src = animatedImagesArray[ratioContainer];
        console.log(ratioContainer);
        return ratioContainer;
      if (ratioContainer <= 2 ) {
        imageContainer.src = animatedImagesArray[1];
        console.log('no top left');
      }
    }
}, 200);
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
})
return (
<div className="navLinks sm:top-0 m-auto block ">
  <ul className="absolute sm:top-0 sm:w-auto sm:m-auto text-right w-1/12 dock opacity-95">
  <div className="sm:hidden aniScrollContainer">
  <a onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
<img id="aniImage" src="../imagesshrunk/computer_0001.png" />
</a>
  </div>
{navLinks.map((navLink) => (
  <li className="sm:inline-block align-top text-center m-auto mb-4 px-1 py-1 "  style={{"width" : "auto"}} key={navLink.title}>
  <div className="navItem">
  <a href={navLink.url}>
    <Spline scene="https://prod.spline.design/MJxoGltSbX4HizjE/scene.splinecode" />
  <span className="courier-prime m-auto text-xs uppercase border-b-2 border-solid border-gray-200 px-1 py-1">
  {navLink.title}
  </span>
    </a>
  </div>
  </li>

))}
</ul>
  </div>
)
}
