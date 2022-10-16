export default function Footer() {


const myFunction = () => {
  console.log('click click mf');
}


return (
  <footer>
       <div className="marquee courier-prime" onClick={myFunction}>
           <p> pay no attention to this footer </p>
       </div>
  </footer>
)
}
