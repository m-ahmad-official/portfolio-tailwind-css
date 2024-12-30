import Header from "@/components/Header";
import Image from "next/image";

export default function About() {
    return (
        <>
            <Header />
            <section className="bg-[#19292d] min-h-[100vh] px-[9%] flex justify-between items-center gap-8">
                <div className="sm:block hidden about-img">
                    <Image src="/images/about.png" alt="About" width={450} height={450} />
                </div>
                <div className="max-sm:text-center about-content">
                    <h2 className="text-7xl font-bold max-sm:py-2 text-white heading">About <span className="text-[#01c38d]">Me</span></h2>
                    <h3 className="text-[2.6rem] font-bold max-sm:py-2 sm:pt-4 text-white">Frontend Developer!</h3>
                    <p className="text-[1.6rem] sm:pt-8 max-sm:py-2 sm:pb-12 text-white sm:w-[800px]">A Front-End Developer focuses on building the parts of a website or web application that users interact with directly. They use HTML to structure content, CSS for styling, and JavaScript to add interactivity. Their goal is to ensure a smooth, responsive user experience across devices, working closely with designers and back-end developers to integrate design and functionality effectively.</p>
                    <button className="btn inline-block bg-[#01c38d] max-sm:mt-6 py-[1rem] px-[2.8rem] bg-[#c] rounded-[4rem] shadow-[0_0_1rem_rgba(1,195,141)] text-[1.6rem] text-[#19292d] font-semibold tracking-wider transition-all duration-[.5s] ease hover:shadow-none">Read More</button>
                </div>
            </section>
        </>
    );
}
