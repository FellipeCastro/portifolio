import cellphoneStoreReact from '../img/cellphone-store-react.png'
import todoListReact from '../img/todo-list-react.png'
import landingPageProlingo from '../img/landing-page-prolingo.png'
import ageCalculator from '../img/age-calculator.png'

import './Projects.css'

export default function Projects() {

    const projects = [
        {name: "Cellphone Store", src: cellphoneStoreReact, site: "https://fellipecastro.github.io/cellphone-store-react/", repositorio: "https://github.com/FellipeCastro/cellphone-store-react"},
        {name: "Todo List", src: todoListReact, site: "https://fellipecastro.github.io/todo-list-react/", repositorio: "https://github.com/FellipeCastro/todo-list-react"},
        {name: "Landing Page", src: landingPageProlingo, site: "https://fellipecastro.github.io/landing-page-prolingo/", repositorio: "https://github.com/FellipeCastro/landing-page-prolingo"},
        {name: "Age Calculator", src: ageCalculator, site: "https://fellipecastro.github.io/age-calculator/", repositorio: "https://github.com/FellipeCastro/age-calculator"}
    ]

    return (
        <div className="projects" id='projects'>
            <h2>Projetos</h2>

            <ul>
                {projects.map((project, index) => {
                    return (
                        <li key={index}>
                            <div className="info">
                                <a href={project.site} target='_blank'>Ver site</a>
                                <a href={project.repositorio} target='_blank'>Ver repositório</a>
                            </div>
                            <img src={project.src} alt={project.name} />
                            <h3>{project.name}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}