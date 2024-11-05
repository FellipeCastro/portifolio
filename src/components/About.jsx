import { useState } from 'react'

import javascript from '../img/javascript.jpg'
import reactjs from '../img/reactjs.jpg'
import git from '../img/git.jpg'
import nodejs from '../img/nodejs.jpg'
import mysql from '../img/mysql.jpg'

import './About.css'

export default function About() {

    const [skillDescription, setSkillDescription] = useState(null)

    const skills = [
        { name: "Javascript", src: javascript, description: "JavaScript é uma linguagem de programação de alto nível que é amplamente utilizada para criar interatividade em páginas web. É executada no lado do cliente, permitindo manipulação dinâmica do conteúdo e interação do usuário." },
        { name: "React JS", src: reactjs, description: "ReactJS é uma biblioteca de JavaScript desenvolvida pelo Facebook. É usada para construir interfaces de usuário reativas e eficientes, facilitando a criação de componentes reutilizáveis e o desenvolvimento de aplicações de página única (SPA)." },
        { name: "Node Js", src: nodejs, description: "Node.js é um ambiente de execução JavaScript no lado do servidor, desenvolvido para criar aplicações escaláveis e de alta performance. Ele permite que desenvolvedores utilizem JavaScript para construir back-ends eficientes, suportando entrada/saída assíncrona e gerenciamento de APIs RESTful." },
        { name: "MySQL", src: mysql, description: "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto. É amplamente utilizado em aplicações web para armazenar, organizar e consultar dados de forma eficiente, suportando SQL como linguagem para manipulação de dados." },
        { name: "Git/Github", src: git, description: "Git é um sistema de controle de versão distribuído amplamente utilizado para rastrear alterações no código-fonte durante o desenvolvimento de software. GitHub é uma plataforma de hospedagem de código-fonte que utiliza o Git. É popular para colaboração em projetos de software, fornecendo recursos como controle de versão, colaboração, rastreamento de problemas e integração contínua." },
    ]

    const toggleSkillDescription = (description) => {
        setSkillDescription(skillDescription === description ? null : description)
    }

    return (
        <section className='about' id='about'>
            <div className="text-container-about">
                <div className="about-me">
                    <h2>Sobre mim</h2>
                    <p>
                        Me chamo <strong>Fellipe da Silva Castro</strong>, tenho 16 anos e estou cursando o curso técnico em <strong>informática para internet</strong> na <strong>ETEC</strong>. Há um ano, entrei no mundo da programação e, atualmente, atuo como desenvolvedor <strong>full stack</strong>, com foco no <strong>front-end</strong> usando <strong>React.js</strong> e no <strong>back-end</strong> com <strong>Node.js</strong> e <strong>MySQL</strong>. Além dos estudos técnicos, estou aprimorando meu <strong>inglês</strong> no <strong>CNA</strong>, alcançando um nível <strong>intermediário</strong>.
                    </p>
                    <p>
                        Sou apaixonado pela resolução de problemas e pela colaboração com outros entusiastas de tecnologia. Acredito que a inovação surge da troca de ideias e da busca constante por novos conhecimentos. Estou entusiasmado em continuar explorando o mundo da programação e contribuir com soluções criativas e impactantes.
                    </p>
                </div>


                <div className="skills">
                    <h2>Habilidades</h2>

                    <ul>
                        {skills.map((skill, index) => {
                            return (
                                <li key={index} onClick={() => toggleSkillDescription(skill.description)}>
                                    <img src={skill.src} alt={skill.name} />
                                    <h3>{skill.name}</h3>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <p className={`skill-description ${skillDescription ? '' : 'hidden'}`}>{skillDescription}</p>
            </div>
        </section>
    )
}