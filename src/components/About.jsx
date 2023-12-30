import html5 from '../img/html-5.jpg'
import css3 from '../img/css-3.jpg'
import javascript from '../img/javascript.jpg'
import reactjs from '../img/reactjs.jpg'
import git from '../img/git.jpg'

import './About.css'

export default function About() {

    const skills = [
        {name: "HTML 5", src: html5},
        {name: "CSS 3", src: css3},
        {name: "Javascript", src: javascript},
        {name: "React JS", src: reactjs},
        {name: "Git e Github", src: git}
    ]

    return (
        <section className='about' id='about'>
            <div className="text-container-about">
                <div className="about-me">
                    <h2>Sobre mim</h2>
                    <p>
                        Me chamo <strong>Fellipe da Silva Castro</strong>, tenho 16 anos e estou cursando o curso técnico em <strong>informática para internet</strong> na <strong>ETEC</strong>. Há um ano, entrei no mundo da programação, focando no desenvolvimento <strong>front-end</strong>, especialmente em <strong>React.js</strong>.  Ao lado dos estudos técnicos, estou aprimorando meu <strong>inglês</strong> no <strong>CNA</strong>, alcançando um nível <strong>intermediário</strong>.
                    </p>
                    <p>
                        Além dos estudos, encontro inspiração na resolução de problemas e na colaboração com outros entusiastas da tecnologia. Acredito que a inovação surge da troca de ideias e da busca constante por novos conhecimentos. Estou ansioso para continuar explorando as possibilidades do mundo da programação e contribuir para o desenvolvimento de soluções criativas e impactantes.
                    </p>
                </div>

                <div className="skills">
                    <h2>Habilidades</h2>

                    <ul>
                        {skills.map((skill, index) => {
                            return (
                                <li key={index}>
                                    <img src={skill.src} alt={skill.name} />
                                    <h3>{skill.name}</h3>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}