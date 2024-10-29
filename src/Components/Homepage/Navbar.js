import React, { useState } from 'react';
import logo from './assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { BsMenuButtonWideFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
    const location = useLocation();

    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const linkStyle = (path) =>
        activeLink === path
            ? 'text-[#3063E6] underline'
            : 'text-[#111111]';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    };

    return (
        <div className='w-[70%] max-lg:w-[80%] flex justify-between items-center py-6'>
            <Link to='/'><img src={logo} alt='logo' className='max-xl:w-[150px] max-sm:w-[130px]' /></Link>
            <div className='max-md:hidden flex text-[22px] max-xl:text-[18px] font-normal gap-10 max-xl:gap-6'>
                <Link to='/' className={linkStyle('/')}>
                    SEARCH
                </Link>
                <Link to='https://girmantech.com/' target='_blank' className={linkStyle('/website')}>
                    WEBSITE
                </Link>
                <Link to='https://www.linkedin.com/company/girmantech/' target='_blank' className={linkStyle('/linkedin')}>
                    LINKEDIN
                </Link>
                <Link to='mailto:contact@girmantech.com' target='_blank' className={linkStyle('/contact')}>
                    CONTACT
                </Link>
            </div>
            <div className='md:hidden'>
                {isMenuOpen ? (
                    <AiFillCloseCircle className='text-[25px] max-sm:text-[20px] z-20' onClick={toggleMenu} />
                ) : (
                    <BsMenuButtonWideFill className='text-[25px] max-sm:text-[20px]' onClick={toggleMenu} />
                )}
            </div>
            {isMenuOpen && (
                <div className='absolute top-0 left-0 right-0 bg-white h-screen shadow-md py-4 z-10 flex flex-col items-center md:hidden'>
                    <div className='flex justify-end w-[90%]'>
                        <AiFillCloseCircle className='text-[25px] max-sm:text-[20px] mb-4 z-20' onClick={toggleMenu} />
                    </div>
                    <div className='flex flex-col gap-10 mt-20'>
                        <Link to='/' className={linkStyle('/')}>
                            SEARCH
                        </Link>
                        <Link to='https://girmantech.com/' target='_blank' className={linkStyle('/website')}>
                            WEBSITE
                        </Link>
                        <Link to='https://www.linkedin.com/company/girmantech/' target='_blank' className={linkStyle('/linkedin')}>
                            LINKEDIN
                        </Link>
                        <Link to='mailto:contact@girmantech.com' target='_blank' className={linkStyle('/contact')}>
                            CONTACT
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
