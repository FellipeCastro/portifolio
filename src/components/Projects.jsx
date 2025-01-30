import taskManager from '../img/task-manager.png'
import devBurger from '../img/dev-burger.png'
import cellphoneStoreReact from '../img/cellphone-store-react.png'
import todoListReact from '../img/todo-list-react.png'
// import landingPageProlingo from '../img/landing-page-prolingo.png'
// import ageCalculator from '../img/age-calculator.png'

import './Projects.css'

export default function Projects() {

    const projects = [
        {
            name: "TaskManager", 
            src: taskManager, 
            site: "https://task-manager-web-tau.vercel.app/", 
            repositorio: "https://github.com/FellipeCastro/task-manager", 
            description: "Uma plataforma de gerenciamento de tarefas criada com REACT JS e NODE JS, projetada para facilitar a organização e execução de tarefas com suporte para listas de tarefas, subtarefas e boards personalizados."
        },
        {
            name: "Dev Burger", 
            src: devBurger, 
            site: "https://dev-burger-beta.vercel.app/", 
            repositorio: "https://github.com/FellipeCastro/dev-burger", 
            description: "Dev Burger é um site de hamburgueria desenvolvido em REACT JS, oferecendo uma experiência fluida e intuitiva para os clientes. Com um carrinho de compras moderno, os usuários podem personalizar seus pedidos e enviá-los diretamente para o WhatsApp. Além disso, a integração com a API ViaCEP facilita o preenchimento automático dos dados de entrega, tornando o processo mais rápido e prático."
        },
        {
            name: "Cellphone Store", 
            src: cellphoneStoreReact, 
            site: "https://fellipecastro.github.io/cellphone-store-react/", 
            repositorio: "https://github.com/FellipeCastro/cellphone-store-react", 
            description: "Loja de celulares feita com REACT JS, conectada à API do Mercado Livre. Adicione e remova itens do carrinho de compras com atualizações instantâneas do total a ser pago."
        },
        {
            name: "Todo List", 
            src: todoListReact, 
            site: "https://fellipecastro.github.io/todo-list-react/", 
            repositorio: "https://github.com/FellipeCastro/todo-list-react", 
            description: "Todo list feita em REACT JS, oferecendo modos claro/escuro, filtragem intuitiva e operações simples de adição e remoção de tarefas."
        },
        // {
        //     name: "Landing Page", 
        //     src: landingPageProlingo, 
        //     site: "https://fellipecastro.github.io/landing-page-prolingo/", 
        //     repositorio: "https://github.com/FellipeCastro/landing-page-prolingo", 
        //     description: "Landing page responsiva feita com HTML, CSS e JAVASCRIPT, apresentando modais explicativos e uma barra de navegação elegante."
        // },
        // {
        //     name: "Age Calculator", 
        //     src: ageCalculator, 
        //     site: "https://fellipecastro.github.io/age-calculator/", 
        //     repositorio: "https://github.com/FellipeCastro/age-calculator", 
        //     description: "Calculador de idade feito com HTML, CSS e JAVASCRIPT, que mostra sua idade exata, em anos, meses e dias. Proporcionando uma análise rápida e precisa."
        // }
    ]

    return (
        <section className="projects" id='projects'>
            <div className="container-projects">
                <h2>Projetos</h2>
                <ul>
                    {projects.map((project, index) => {
                        return (
                            <li key={index}>
                                <div className="info">
                                    <p>
                                        {project.description}
                                    </p>
                                    <div className="btn-container">
                                        <a href={project.site} target='_blank'>Ver site</a>
                                        <a href={project.repositorio} target='_blank'>Ver repositório</a>
                                    </div>
                                </div>
                                <img src={project.src} alt={project.name} />
                                <h3>{project.name}</h3>
                            </li>
                        )
                    })}
                </ul>
                <a href="https://github.com/FellipeCastro?tab=repositories" target='_blank' className='see-more'>Ver todos repositórios no Github</a>
            </div>
        </section>
    )
}