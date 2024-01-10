'use client'
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="p-4 bg-[#13f013] bg-transparent">
            <div className="max-w-7xl flex items-center justify-between">
                <Link href={'/'} className={`flex items-center gap-2 ${isMenuOpen ? 'hidden' : ''}`}>
                    <span className="text-base sm:text-2xl">App Landing</span>
                    <FontAwesomeIcon 
                    className="sm:text-2xl"
                    icon={faAccusoft} 
                    fixedWidth={true}/>
                </Link>

                <div className="md:hidden text-gray-800 absolute top-4 right-4">
                    <FontAwesomeIcon

                        icon={isMenuOpen ? faTimes : faBars}
                        onClick={toggleMenu}
                        on
                        className="text-gray-800 cursor-pointer text-xl"
                    />
                </div>

                <div className={`text-base md:flex items-center gap-6 
                md:gap-10 md:text-xl mt-8 sm:mt-0 ${isMenuOpen ? 'flex flex-col w-full' : 'hidden'}`}>
                    <Link className="hover:bg-pink-100 mobile2 font-medium" href={'/'} onClick={closeMenu}>About</Link>
                    <Link className="hover:bg-pink-100 mobile2 font-medium" href={'/'} onClick={closeMenu}>Home</Link>
                    <Link className="hover:bg-pink-100 mobile2 font-medium" href={'/'} onClick={closeMenu}>Feature</Link>
                    <Link className="hover:bg-pink-100 mobile2 font-medium" href={'/'} onClick={closeMenu}>Pricing</Link>
                    <Link className="hover:bg-pink-100 mobile2 font-medium" href={'/'} onClick={closeMenu}>Contact</Link>
                </div>
            </div>
        </header>
    )
}