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

                <a href="#">Veja meus projetos</a>
            </div>
            <div className="img-container">
                <img src={Img} alt="Home image" />
            </div>
        </div>
    )
}