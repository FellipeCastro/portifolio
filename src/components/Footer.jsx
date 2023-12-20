import { FaGithub, FaLinkedinIn, FaWhatsapp  } from "react-icons/fa";

import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <h1>Fellipe Castro</h1>

            <ul>
                <li>
                    <a href="#"><FaGithub /> - FellipeCastro</a>
                </li>
                <li>
                    <a href="#"><FaLinkedinIn /> - Fellipe Castro</a>
                </li>
                <li>
                    <a href="#"><FaWhatsapp  /> - (11) 00000-0000</a>
                </li>
            </ul>
        </footer>
    )
}