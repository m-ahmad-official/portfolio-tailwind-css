"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full py-10 px-[9%] bg-[#05161a] flex justify-between items-center">
        <h3 className="text-[2.5rem] text-white font-semibold cursor-default">Portfolio</h3>
        <div className="sm:hidden" onClick={toggleMenu}>
          <i className='bx bx-menu text-[3.6rem] text-white'></i>
        </div>

        <nav className={`flex gap-16 ${menuOpen ? 'block' : 'hidden'} sm:flex`}>
          <a href="#home" className="text-[1.7rem] text-white font-medium hover:text-[#01c38d] transition-all duration-[.3s]">Home</a>
          <a href="#about" className="text-[1.7rem] text-white font-medium hover:text-[#01c38d] transition-all duration-[.3s]">About</a>
          <a href="#services" className="text-[1.7rem] text-white font-medium hover:text-[#01c38d] transition-all duration-[.3s]">Services</a>
          <a href="#projects" className="text-[1.7rem] text-white font-medium hover:text-[#01c38d] transition-all duration-[.3s]">Projects</a>
          <a href="#contact" className="text-[1.7rem] text-white font-medium hover:text-[#01c38d] transition-all duration-[.3s]">Contact</a>
        </nav>
      </header>
      <section className="min-h-[100vh] pt-[10rem] px-[9%] pb-[2rem] bg-[#05161a] flex max-sm:flex-col-reverse gap-16 sm:justify-between justify-center items-center" id="home">
        <div className="max-sm:flex max-sm:flex-col max-sm:text-center gap-2 home-content">
          <h3 className="sm:text-[3.2rem] text-[2rem] font-bold text-white">Hello, It is Me</h3>
          <h1 className="text-white sm:text-[5.6rem] text-[3rem] font-bold leading-[1.3]">Muhammad Ahmed</h1>
          <h3 className="sm:text-[3.2rem] text-[2rem] font-bold text-white">And I am a <span className="multiple-text text-[#01c38d]"></span></h3>
          <p className="text-white text-[1.6rem] w-[800px] sm:block hidden">A Front-End Developer focuses on building the parts of a website or web application that users interact with directly. They use HTML to structure content, CSS for styling, and JavaScript to add interactivity. Their goal is to ensure a smooth, responsive user experience across devices, working closely with designers and back-end developers to integrate design and functionality effectively.</p>
          <p className="text-white text-[1.4rem] max-sm:block hidden">A Front-End Developer focuses on building the parts of a website or web application that users interact with directly. They use HTML to structure content, CSS for styling, and JavaScript to add interactivity.</p>
          <div className="social-media">
            <a href="#" className="text-[#01c38d] text-[2rem] rounded-[50%] sm:my-[3rem] my-[1.5rem] mr-[1.5rem] inline-flex justify-center items-center w-16 h-16 border-[.2rem] border-[#01c38d] border-solid hover:bg-[#01c38d] hover:shadow-[0_0_1rem_rgba(1,195,141)] transition-all duration-[.5s] ease hover:text-[#05161a]"><i className='bx bxl-facebook-circle'></i></a>
            <a href="#" className="text-[#01c38d] text-[2rem] rounded-[50%] sm:my-[3rem] my-[1.5rem] mr-[1.5rem] inline-flex justify-center items-center w-16 h-16 border-[.2rem] border-[#01c38d] border-solid hover:bg-[#01c38d] hover:shadow-[0_0_1rem_rgba(1,195,141)] transition-all duration-[.5s] ease hover:text-[#05161a]"><i className='bx bxl-github'></i></a>
            <a href="#" className="text-[#01c38d] text-[2rem] rounded-[50%] sm:my-[3rem] my-[1.5rem] mr-[1.5rem] inline-flex justify-center items-center w-16 h-16 border-[.2rem] border-[#01c38d] border-solid hover:bg-[#01c38d] hover:shadow-[0_0_1rem_rgba(1,195,141)] transition-all duration-[.5s] ease hover:text-[#05161a]"><i className='bx bxl-instagram'></i></a>
            <a href="#" className="text-[#01c38d] text-[2rem] rounded-[50%] sm:my-[3rem] my-[1.5rem] mr-[1.5rem] inline-flex justify-center items-center w-16 h-16 border-[.2rem] border-[#01c38d] border-solid hover:bg-[#01c38d] hover:shadow-[0_0_1rem_rgba(1,195,141)] transition-all duration-[.5s] ease hover:text-[#05161a]"><i className='bx bxl-linkedin-square'></i></a>
          </div>
          <button className="inline-block bg-[#01c38d] py-[1rem] px-[2.8rem] bg-[#c] rounded-[4rem] shadow-[0_0_1rem_rgba(1,195,141)] text-[1.6rem] text-[#05161a] font-semibold tracking-wider transition-all duration-[.5s] ease hover:shadow-none">Download CV</button>
        </div>
        <div className="max-w-[500px] overflow-hidden home-img animate-floatImages">
          <Image src="/images/home.png" alt="Home" width={500} height={500} className="w-full h-auto" sizes="(max-width: 600px) 70vw, 50vw" />
        </div>
      </section>
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#05161a] z-10 flex flex-col items-center justify-center">
          <button onClick={closeMenu} className="absolute top-7 right-16 text-white text-[3.4rem]">
            &#10006;
          </button>
          <nav className="flex flex-col items-center gap-10">
            <a href="#home" onClick={closeMenu} className="text-[2rem] text-white font-medium hover:text-[#01c38d] transition-all duration-[.3s]">Home</a>
            <a href="#about" onClick={closeMenu} className="text-[2rem] text-white font-medium hover:text-[#01c38d] transition-all duration-[.3s]">About</a>
            <a href="#services" onClick={closeMenu} className="text-[2rem] text-white font-medium hover:text-[#01c38d] transition-all duration-[.3s]">Services</a>
            <a href="#projects" onClick={closeMenu} className="text-[2rem] text-white font-medium hover:text-[#01c38d] transition-all duration-[.3s]">Projects</a>
            <a href="#contact" onClick={closeMenu} className="text-[2rem] text-white font-medium hover:text-[#01c38d] transition-all duration-[.3s]">Contact</a>
          </nav>
        </div>
      )}
    </>
  );
}
