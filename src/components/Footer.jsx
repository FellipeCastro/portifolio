import { FaGithub, FaLinkedinIn, FaWhatsapp  } from "react-icons/fa";

import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <h1>Fellipe Castro</h1>

            <ul>
                <li>
                    <a href="https://github.com/FellipeCastro" target="_blank"><FaGithub /> - FellipeCastro</a>
                </li>
                <li>
                    <a href="#"><FaLinkedinIn /> - Fellipe Castro</a>
                </li>
                <li>
                    <a href="https://wa.me/5511940618163" target="_blank"><FaWhatsapp  /> - (11) 94061-8163</a>
                </li>
            </ul>
        </footer>
    )
}