import Img from '../img/img-home.svg'

import './Home.css'

export default function Home() {
    return (
        <div className='home' id='home'>
            <div className="text-container">
                <h2>
                    Olá, sou <br />
                    <span>Fellipe Castro</span> <br /> 
                    Desenvolvedor Front End
                </h2>

<<<<<<< Updated upstream
                <div className="btns-container">
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>
=======
                
                <div className="btns-container">
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaLinkedinIn /></a>
                </div>   
>>>>>>> Stashed changes
            </div>
            <div className="img-container">
                <img src={Img} alt="Home image" />
            </div>
        </div>
    )
}