import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Img from '../img/img-home.svg'

import './Home.css'

export default function Home() {
    return (
        <section className='home' id='home'>
            <div className="text-container-home">
                <h2>
                    Olá, sou <br />
                    <span>Fellipe Castro</span> <br /> 
                    Desenvolvedor Full-stack
                </h2>

                
                <div className="btns-container">
                    <a href="https://github.com/FellipeCastro" target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/fellipe-castro-ab764a2a7/" target="_blank"><FaLinkedinIn /></a>
                </div>   
            </div>
            <div className="img-container-home">
                <img src={Img} alt="Home image" />
            </div>
        </section>
    )
}