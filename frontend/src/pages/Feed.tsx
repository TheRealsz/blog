import { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import ScrollToTop from '../components/ScrollToTop';
import Card from '../components/Card';


const Feed = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    return (
        <div className="h-full w-full flex flex-col gap-10">
            <header className="flex flex-col items-center w-full bg-gradient-to-tl from-blue-400 to-violet-800 h-auto py-8">
                <div className='flex flex-col max-w-4xl w-full gap-8 items-center xl:gap-14'>
                    <div className="flex flex-row justify-between w-11/12 items-center text-white font-light xl:text-xl">
                        <span>TheReal</span>
                        <span>Blog</span>
                    </div>
                    <div className='relative w-full justify-center flex flex-row mb-1'>
                        <div className="absolute inset-y-0 left-3.5 flex items-center pl-3.5 pointer-events-none sm:pl-8">
                            <AiOutlineSearch className="text-xl text-white font-bold xl:text-2xl" />
                        </div>
                        <input type="text" className="outline-none p-2 w-11/12 rounded-md pl-9 bg-opacity-25 bg-white text-white placeholder:text-white font-light text-sm sm:pl-11 xl:p-3 xl:pl-10 xl:text-base" placeholder="Pesquisar no blog"></input>
                    </div>
                </div>
            </header>
            <main className="flex justify-center items-center w-full">
                <div className='flex flex-col justify-center gap-10 items-center max-w-4xl'>
                    <Card />
                </div>
            </main>
            <div className={`${showTopBtn == true ? 'fixed bottom-1 right-1 z-20' : 'opacity-0'} duration-500 transition-all`}>
                <div className='pr-2'>
                    <ScrollToTop />
                </div>
            </div>
        </div>
    )

}

export default Feed