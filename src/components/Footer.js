
const Footer = params =>  {



const scrollBottom = (params) => {
  var skiFree = document.getElementById('skifree_disk');
  skiFree.scrollIntoView({behavior:'smooth'}, true);

}


return (
  <footer>
  <div className="w-full" onClick={scrollBottom}>
       <div className="marquee red-hat text-black">
           <p >DO NOT CLICK THE FOOTER </p>

       </div>
       </div>
  </footer>
)
}
export default Footer;
