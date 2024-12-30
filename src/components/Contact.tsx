export default function Contact() {
    return (
        <>
            <section className="bg-[#05161a] sm:min-h-[100vh] max-sm:pt-56 max-sm:pb-20 px-[9%] flex items-center justify-center contact" id="contact">
                <div>
                    <h2 className="text-7xl text-center font-bold text-white mb-12 heading">Contact <span className="text-[#01c38d]">Me!</span></h2>
                    <form action="#" className="max-w-[70rem] my-4 mx-auto text-center mb-12">
                        <div className="flex justify-between flex-wrap">
                            <input type="text" name="name" placeholder="First Name" required className="sm:w-[230px] w-full p-6 text-[1.6rem] text-white bg-[#19292d] rounded-[.8rem] my-[.7rem]" />
                            <input type="text" name="name" placeholder="Last Name" required className="sm:w-[230px] w-full p-6 text-[1.6rem] text-white bg-[#19292d] rounded-[.8rem] my-[.7rem]" />
                        </div>
                        <div className="flex justify-between flex-wrap">
                            <input type="number" name="number" placeholder="Phone Number" required className="sm:w-[230px] w-full p-6 text-[1.6rem] text-white bg-[#19292d] rounded-[.8rem] my-[.7rem]" />
                            <input type="email" name="email" placeholder="Email Address" required className="sm:w-[230px] w-full p-6 text-[1.6rem] text-white bg-[#19292d] rounded-[.8rem] my-[.7rem]" />
                        </div>
                        <textarea name="" id="" cols={30} rows={10} placeholder="Message" required className="w-full p-6 text-[1.6rem] text-white bg-[#19292d] rounded-[.8rem] my-[.7rem] resize-none"></textarea>
                        <input type="submit" value="Send Message" className="inline-block bg-[#01c38d] py-[1rem] px-[2.8rem] bg-[#c] rounded-[4rem] shadow-[0_0_1rem_rgba(1,195,141)] text-[1.6rem] text-[#05161a] font-semibold tracking-wider transition-all duration-[.5s] ease hover:shadow-none mt-6 cursor-pointer" />
                    </form>
                </div>
            </section>
        </>
    );
}
