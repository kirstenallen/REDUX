export default function About() {

return (
  <section className="about courier-prime w-12/12 m-auto text-gray-400 bg-gray-100 body-font">
    <div className="container w-full relative mx-auto text-center ">
        <div className="imagesPre flex  flex-row flex-nowrap align-middle content-between">
          <div className="courier-prime text-left w-10/12 px-5 pt-2 pb-10">section information here</div>
          <div className="text-right w-2/12 px-5 pt-2 pb-10 ">x</div>
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
          Kirsten is a designer/developer living in Austin, TX & is currently looking for <span className="bold code-green">remote</span>/<span className="bold code-yellow">freelance</span> work.
          <br/>
          <br/>
        <h1 className="sm:text-4xl text-4xl font-medium title-font mb-4 text-gray-900">
        <div className="sectionHeader courier-prime text-xl"><p>We Can Make Anything We Want</p></div>
        </h1>
          <br/>
          <br/>
            <ul className="text-left list-disc grid grid-cols-2 mx-auto block w-10/12">
            <li>designer</li>
            <li>illustrator</li>
            <li>prototyper</li>
            <li>developer</li>
            <li>media designer</li>
            <li>photographer</li>
            <li>videographer</li>
            <li>3d animator</li>
            <li>juggler</li>
            <li>carpenter</li>
            <li>stand up comedian</li>
            <li>anything at all</li>
            </ul>
            <br/>
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
      </section>
)
}
