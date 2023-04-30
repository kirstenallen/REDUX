import {useState}  from "react";
const Footer = params =>  {

const [showSecret, setShowSecret] = useState("");

const scrollBottom = (params) => {
  var skiFree = document.getElementById('skifree_disk');
  skiFree.scrollIntoView({behavior:'smooth'}, true);

}


return (
  <footer>
  <div className="w-full" onClick={scrollBottom}>
       <div className="marquee red-hat text-black " >
           <p>DO NOT CLICK THE FOOTER - IT IS JUST FOR SHOW - TRUST ME - IT'S NOT IMPORTANT - DON'T MIND THE FOOTER - NOTHING OF INTEREST HERE - JUST A NORMAL FOOTER. </p>
       </div>
       </div>
  </footer>
)
}
export default Footer;
