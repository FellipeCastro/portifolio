import { useState } from 'react'

import html5 from '../img/html-5.jpg'
import css3 from '../img/css-3.jpg'
import javascript from '../img/javascript.jpg'
import reactjs from '../img/reactjs.jpg'
import git from '../img/git.jpg'

import ModalSkills from './ModalSkills'

import './About.css'

export default function About() {

    const [skillData, setSkillData] = useState({
        img: "",
        title: "",
        description: ""
    })

    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const skills = [
        {name: "HTML 5", src: html5, description: "HTML5 é a quinta versão da linguagem de marcação utilizada para estruturar conteúdo na web. Introduziu novos elementos e APIs que aprimoram a semântica, o suporte multimídia e a interatividade nas páginas da web."},
        {name: "CSS 3", src: css3, description: "CSS3 é a terceira versão das Folhas de Estilo em Cascata e é usada para estilizar o layout e a apresentação de páginas web. Introduziu recursos como transições, animações, sombras e bordas arredondadas, oferecendo maior controle estilístico."},
        {name: "Javascript", src: javascript, description: "JavaScript é uma linguagem de programação de alto nível que é amplamente utilizada para criar interatividade em páginas web. É executada no lado do cliente, permitindo manipulação dinâmica do conteúdo e interação do usuário."},
        {name: "React JS", src: reactjs, description: " ReactJS é uma biblioteca de JavaScript desenvolvida pelo Facebook. É usada para construir interfaces de usuário reativas e eficientes, facilitando a criação de componentes reutilizáveis e o desenvolvimento de aplicações de página única (SPA)."},
        {name: "Git e Github", src: git, description: "Git é um sistema de controle de versão distribuído amplamente utilizado para rastrear alterações no código-fonte durante o desenvolvimento de software. GitHub é uma plataforma de hospedagem de código-fonte que utiliza o Git. É popular para colaboração em projetos de software, fornecendo recursos como controle de versão, colaboração, rastreamento de problemas e integração contínua."}
    ]

    const openModal = (skill) => {
        setSkillData({
            img: skill.src,
            title: skill.name,
            description: skill.description
        })

        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <section className='about' id='about'>
            <div className="text-container-about">
                <div className="about-me">
                    <h2>Sobre mim</h2>
                    <p>
                        Me chamo <strong>Fellipe da Silva Castro</strong>, tenho 16 anos e estou cursando o curso técnico em <strong>informática para internet</strong> na <strong>ETEC</strong>. Há um ano, entrei no mundo da programação, focando no desenvolvimento <strong>front-end</strong>, especialmente em <strong>React Js</strong>.  Ao lado dos estudos técnicos, estou aprimorando meu <strong>inglês</strong> no <strong>CNA</strong>, alcançando um nível <strong>intermediário</strong>.
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
                                <li key={index} onClick={() => openModal(skill)}>
                                    <img src={skill.src} alt={skill.name} />
                                    <h3>{skill.name}</h3>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {isModalOpen && (
                <ModalSkills 
                    img={skillData.img}
                    title={skillData.title}
                    description={skillData.description}
                    closeModal={closeModal}
                />
            )}
        </section>
    )
}