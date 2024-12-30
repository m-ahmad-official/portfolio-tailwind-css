import Header from "@/components/Header";
import Image from "next/image";

export default function Services() {
    return (
        <>
            <Header />
            <section className="bg-[#05161a] min-h-[100vh] max-sm:pt-56 max-sm:pb-24 px-[9%] flex items-center justify-center">
                <div>
                    <h2 className="text-7xl text-center font-bold text-white mb-20 heading">Our <span className="text-[#01c38d]">Services</span></h2>
                    <div className="flex max-sm:flex-col gap-9 services-container max-sm:w-[340px]">
                        <div className="bg-[#19292d] px-9 py-16 rounded-[2rem] text-center border-solid border-[.2rem] border-[#05161a] transition-all duration-[.5s] ease sm:hover:border-[#01c38d] sm:hover:scale-105">
                            <i className='bx bx-code-alt text-[7rem] text-[#01c38d]'></i>
                            <h3 className="text-[2.6rem] font-bold text-white pt-7 pb-2">Web Development</h3>
                            <p className="text-[1.6rem] pt-4 pb-12 text-white sm:w-[330px]">Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
                            </p>
                            <button className="btn inline-block bg-[#01c38d] py-[1rem] px-[2.8rem] bg-[#c] rounded-[4rem] shadow-[0_0_1rem_rgba(1,195,141)] text-[1.6rem] text-[#19292d] font-semibold tracking-wider transition-all duration-[.5s] ease hover:shadow-none">Read More</button>
                        </div>
                        <div className="bg-[#19292d] px-9 py-16 rounded-[2rem] text-center border-solid border-[.2rem] border-[#05161a] transition-all duration-[.5s] ease sm:hover:border-[#01c38d] sm:hover:scale-105">
                            <i className='bx bxs-badge-dollar text-[7rem] text-[#01c38d]'></i>
                            <h3 className="text-[2.6rem] font-bold text-white pt-7 pb-2">e-commerce Website</h3>
                            <p className="text-[1.6rem] pt-4 pb-12 text-white sm:w-[330px]">e-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet.</p>
                            <div>
                                <button className="btn inline-block bg-[#01c38d] py-[1rem] px-[2.8rem] bg-[#c] rounded-[4rem] shadow-[0_0_1rem_rgba(1,195,141)] text-[1.6rem] text-[#19292d] font-semibold tracking-wider transition-all duration-[.5s] ease hover:shadow-none">Read More</button>
                            </div>
                        </div>
                        <div className="bg-[#19292d] px-9 py-16 rounded-[2rem] text-center border-solid border-[.2rem] border-[#05161a] transition-all duration-[.5s] ease sm:hover:border-[#01c38d] sm:hover:scale-105">
                            <div className="flex justify-center">
                                <Image src="/stack.svg" alt='Full Stack' width={70} height={70} />
                            </div>
                            <h3 className="text-[2.6rem] font-bold text-white pt-7 pb-2">Full-Stack Development</h3>
                            <p className="text-[1.6rem] pt-4 pb-12 text-white sm:w-[330px]">Full stack development encompasses the complete process of application software development, including both the front-end and back-end development.</p>
                            <div>
                                <button className="btn inline-block bg-[#01c38d] py-[1rem] px-[2.8rem] bg-[#c] rounded-[4rem] shadow-[0_0_1rem_rgba(1,195,141)] text-[1.6rem] text-[#19292d] font-semibold tracking-wider transition-all duration-[.5s] ease hover:shadow-none">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
