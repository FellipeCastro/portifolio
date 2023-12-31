import { useState } from "react";

import { IoMdMenu, IoMdClose  } from "react-icons/io"

import './Header.css'

export default function Header() {

    const [isOpen, setIsopen] = useState(false)

    const openMenu = () => {
        setIsopen(true)
        document.querySelector("#navbar").style.display = "flex"
    }

    const closeMenu = () => {
        setIsopen(false)
        document.querySelector("#navbar").style.display = "none"
    }

    const handleLinkClick = () => {
        if (isOpen) {
            closeMenu()
        }
    }

    return (
        <header className='header'>
            <a href="#home" className="title-header">Fellipe Castro</a>

            <nav className="navbar" id="navbar">
                <a href="#home" onClick={handleLinkClick}>Home</a>
                <a href="#about" onClick={handleLinkClick}>Sobre mim</a>
                <a href="#projects" onClick={handleLinkClick}>Projetos</a>
                <a href="#contact" onClick={handleLinkClick}>Contato</a>
            </nav>

            <button className="menu" onClick={isOpen ? closeMenu : openMenu}>
                {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
        </header>
    )
}