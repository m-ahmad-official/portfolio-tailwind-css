export default function Footer() {
    return (
        <>
            <footer className="bg-[#19292d] text-white flex max-sm:flex-col-reverse gap-8 justify-between items-center py-[2rem] px-[9%]">
                <p className="sm:text-[1.6rem] text-[1.3rem] text-center font-medium">Copyright &copy; 2024 by Codehal | All Rights Reserved.</p>
                <a href="/" className="inline-flex justify-center items-center p-4 bg-[#01c38d] rounded-[50%] transition-all duration-[.3s] hover:shadow-[0_0_1rem_rgb(1,195,141)]"><i className='bx bx-up-arrow-alt text-[2.6rem] text-[#19292d]'></i></a>
            </footer>
        </>
    );
}
