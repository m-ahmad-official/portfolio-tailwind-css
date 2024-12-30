import Header from "@/components/Header";
import Script2 from "@/components/Script2";
import Image from "next/image";
import Script from "next/script";

export default function Projects() {
    return (
        <>
            <Header />
            <section className="bg-[#19292d] min-h-[110vh] px-[9%] max-sm:pt-56 max-sm:pb-24 flex items-center justify-center">
                <div>
                    <h2 className="text-7xl text-center font-bold text-white pb-20 sm:pb-28 heading">Latest <span className="text-[#01c38d]">Projects</span></h2>
                    <div className="sm:grid sm:grid-cols-3 max-sm:flex max-sm:flex-col items-center gap-10 projects-box">
                        <div className="relative rounded-[2rem] shadow-[0_0_1rem_rgb(5,22,26)] overflow-hidden flex group">
                            <Image src="/images/project1.png" alt='Project 1' width={450} height={0} className='w-full transition-all duration-[.5s] esae sm:group-hover:scale-110' />
                            <div className="absolute top-0 left-0 w-full h-full px-16 text-center bg-gradient-to-b from-[rgba(1,195,141,0.1)] to-[#01c38d] flex flex-col justify-center items-center sm:gap-7 gap-4 transition-all ease duration-[.5s] sm:translate-y-full sm:group-hover:translate-y-0 /">
                                <h4 className='text-[#19292d] sm:text-6xl text-5xl font-bold'>UI/UX Design</h4>
                                <p className='text-[#19292d] sm:text-2xl text-xl font-bold'>UX / UI design has become more “trendy” as more and more things move online.</p>
                                <a href="https://uiux-hackathon-psi.vercel.app/" target="_blank" className="inline-flex justify-center items-center sm:h-24 sm:w-24 h-16 w-16 bg-white rounded-[50%]"><i className='bx bx-link-external sm:text-[2rem] text-[1.8rem] text-[#19292d]'></i></a>
                            </div>
                        </div>
                        <div className="relative rounded-[2rem] shadow-[0_0_1rem_rgb(5,22,26)] overflow-hidden flex group">
                            <Image src="/images/project2.png" alt='Project 1' width={450} height={100} className='w-full transition-all duration-[.5s] esae sm:group-hover:scale-110' />
                            <div className="absolute bottom-0 left-0 w-full h-full px-16 text-center bg-gradient-to-b from-[rgba(1,195,141,0.1)] to-[#01c38d] flex flex-col justify-center items-center sm:gap-7 gap-4 transition-all ease duration-[.5s] sm:translate-y-full sm:group-hover:translate-y-0 /">
                                <h4 className='text-white sm:text-6xl text-5xl font-bold'>Todo App</h4>
                                <p className='text-white sm:text-2xl text-xl sm:font-bold font-medium'>Build a Simple ToDo Application using useState.</p>
                                <a href="https://my-todo-app-phi-seven.vercel.app/" target="_blank" className="inline-flex justify-center items-center sm:h-24 sm:w-24 h-16 w-16 bg-white rounded-[50%]"><i className='bx bx-link-external sm:text-[2rem] text-[1.8rem] text-[#19292d]'></i></a>
                            </div>
                        </div>
                        <div className="relative rounded-[2rem] shadow-[0_0_1rem_rgb(5,22,26)] overflow-hidden flex group">
                            <Image src="/images/project3.png" alt='Project 1' width={450} height={100} className='w-full transition-all duration-[.5s] esae sm:group-hover:scale-110' />
                            <div className="absolute bottom-0 left-0 w-full h-full px-20 text-center bg-gradient-to-b from-[rgba(1,195,141,0.1)] to-[#01c38d] flex flex-col justify-center items-center sm:gap-7 gap-4 transition-all ease duration-[.5s] sm:translate-y-full sm:group-hover:translate-y-0 /">
                                <h4 className='text-[#19292d] sm:text-6xl text-5xl font-bold'>Figma to HTML</h4>
                                <p className='text-[#19292d] sm:text-2xl text-xl font-bold'>Convert the provided Figma design into HTML.</p>
                                <a href="https://convert-figma-design-to-html.vercel.app/" target="_blank" className="inline-flex justify-center items-center sm:h-24 sm:w-24 h-16 w-16 bg-white rounded-[50%]"><i className='bx bx-link-external sm:text-[2rem] text-[1.8rem] text-[#19292d]'></i></a>
                            </div>
                        </div>
                        <div className="relative rounded-[2rem] shadow-[0_0_1rem_rgb(5,22,26)] overflow-hidden flex group">
                            <Image src="/images/project4.png" alt='Project 1' width={450} height={100} className='w-full transition-all duration-[.5s] esae sm:group-hover:scale-110' />
                            <div className="absolute bottom-0 left-0 w-full h-full px-16 text-center bg-gradient-to-b from-[rgba(1,195,141,0.1)] to-[#01c38d] flex flex-col justify-center items-center sm:gap-7 gap-4 transition-all ease duration-[.5s] sm:translate-y-full sm:group-hover:translate-y-0 /">
                                <h4 className='text-[#19292d] sm:text-6xl text-5xl font-bold'>Resume Builder</h4>
                                <p className='text-[#19292d] sm:text-2xl text-xl font-bold'>When a user creates a resume, generate a unique URL.</p>
                                <a href="https://milestone5-unique-path-and-shareable-link-six.vercel.app/" target="_blank" className="inline-flex justify-center items-center sm:h-24 sm:w-24 h-16 w-16 bg-white rounded-[50%]"><i className='bx bx-link-external sm:text-[2rem] text-[1.8rem] text-[#19292d]'></i></a>
                            </div>
                        </div>
                        <div className="relative rounded-[2rem] shadow-[0_0_1rem_rgb(5,22,26)] overflow-hidden flex group">
                            <Image src="/images/project5.png" alt='Project 1' width={450} height={100} className='w-full transition-all duration-[.5s] esae sm:group-hover:scale-110' />
                            <div className="absolute bottom-0 left-0 w-full h-full px-16 text-center bg-gradient-to-b from-[rgba(1,195,141,0.1)] to-[#01c38d] flex flex-col justify-center items-center sm:gap-7 gap-4 transition-all ease duration-[.5s] sm:translate-y-full sm:group-hover:translate-y-0 /">
                                <h4 className='text-[#19292d] sm:text-6xl text-5xl font-bold'>Editable Resume</h4>
                                <p className='text-[#19292d] sm:text-2xl text-xl font-bold'>Implement the ability for users to click on sections of the resume.</p>
                                <a href="https://milestone4-editable-resume-builder-six.vercel.app/" target="_blank" className="inline-flex justify-center items-center sm:h-24 sm:w-24 h-16 w-16 bg-white rounded-[50%]"><i className='bx bx-link-external sm:text-[2rem] text-[1.8rem] text-[#19292d]'></i></a>
                            </div>
                        </div>
                        <div className="relative rounded-[2rem] shadow-[0_0_1rem_rgb(5,22,26)] overflow-hidden flex group">
                            <Image src="/images/project6.png" alt='Project 1' width={450} height={100} className='w-full transition-all duration-[.5s] esae sm:group-hover:scale-110' />
                            <div className="absolute bottom-0 left-0 w-full h-full px-16 text-center bg-gradient-to-b from-[rgba(1,195,141,0.1)] to-[#01c38d] flex flex-col justify-center items-center sm:gap-7 gap-4 transition-all ease duration-[.5s] sm:translate-y-full sm:group-hover:translate-y-0 /">
                                <h4 className='text-[#19292d] sm:text-6xl text-5xl font-bold'>Static Resume</h4>
                                <p className='text-[#19292d] sm:text-2xl text-xl font-bold'>Build a static resume using HTML, CSS, and TypeScript.</p>
                                <a href="https://milestone1-static-resume-builder-brown.vercel.app/" target="_blank" className="inline-flex justify-center items-center sm:h-24 sm:w-24 h-16 w-16 bg-white rounded-[50%]"><i className='bx bx-link-external sm:text-[2rem] text-[1.8rem] text-[#19292d]'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Script src="https://unpkg.com/scrollreveal" strategy="beforeInteractive" />
            <Script2 />
        </>
    );
}
