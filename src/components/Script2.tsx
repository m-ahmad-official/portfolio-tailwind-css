"use client";
import { useEffect } from "react";

const Script2: React.FC = () => {
    useEffect(() => {
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

    }, []);
    return <div></div>;
};

export default Script2;