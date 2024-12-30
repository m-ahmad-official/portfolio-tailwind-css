"use client";
import { useEffect } from "react";
import Typed, { TypedOptions } from "typed.js";

const Script: React.FC = () => {
  useEffect(() => {
    const options: TypedOptions = {
      strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
    });

    sr.reveal(".home-content, .heading", { origin: "top" });
    sr.reveal(".home-img, .services-container, .projects-box, .contact form", {
      origin: "bottom",
    });
    sr.reveal(".home-content h1, .about-img", {
      origin: "left",
    });
    sr.reveal(".home-content p, .about-content", { origin: "right" });

    // const typed = new Typed(".multiple-text", options);
    // return () => {
    //   typed.destroy();
    // };

  }, []);
  return <div></div>;
};

export default Script;