// import React from "react";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Bootmenu from './components/Bootmenu';
import './App.css';
import {navLinks} from './data';
import SectionHeader from "./components/subcomponent/SectionHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Work = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 10)).then(() =>
    import('./components/Work')
  );
});
const About = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 100)).then(() =>
    import('./components/About')
  );
});
const Home = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 100)).then(() =>
    import('./components/Home')
  );
});
const Navi = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 100)).then(() =>
    import('./components/Navi')
  );
});
const Footer = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 100)).then(() =>
    import('./components/Footer')
  );
});

export default function App() {
  return (
  <main className="text-gray-400 bg-gray-100 body-font">
        <Suspense fallback={<Bootmenu />}>
      <Navi />
    <section id="main" className="sm:w-11/12 md:w-10/12 w-8/12 m-auto text-gray-400 bg-gray-100 body-font">
    <div id="top" className="container w-full relative mx-auto text-center ">
    <div className="flex flex-col w-full mb-0 absolute  w-8/12 " style={{ position: 'relative', zIndex: '1' }}>
    <div className="placeholder">
    <div className="table align-middle h-screen text-center" >
    <div className="table-cell w-screen align-middle">
    <h3 className=" courier-title text-center text-8xl fade-in">
    <a className="courier-prime" href="#home">k. allen</a>
    </h3>
    <br/>
    <h1 className="courier-title courier-prime">we can make anything we want
  </h1>
    </div>
    </div>
    </div>
        {navLinks.map((navLink) => (
            <div key={navLink.title}>
            <h1 className="text-left sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 bottom-border">
            <SectionHeader title={navLink.title} />
            </h1>
        {    navLink.title === 'home' && <div><Home /></div>
          || navLink.title === 'work' && <div><Work /></div>
          || navLink.title ==='about' && <div><About /></div>
          || <span> none </span> }
    </div>
          ))}
      </div>
      </div>
      </section>
        <Footer />
      </Suspense>
    </main>
  );
}
