import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Img from '../img/img-home.svg'

import './Home.css'

export default function Home() {
    return (
        <div className='home' id='home'>
            <div className="text-container-home">
                <h2>
                    Olá, sou <br />
                    <span>Fellipe Castro</span> <br /> 
                    Desenvolvedor Front End
                </h2>

                
                <div className="btns-container">
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>   
            </div>
            <div className="img-container-home">
                <img src={Img} alt="Home image" />
            </div>
        </div>
    )
}