import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <h1>Fellipe Castro</h1>

            <nav>
                <a href="#home">Home</a>
                <a href="#about">Sobre mim</a>
                <a href="#projects">Projetos</a>
                <a href="#contact">Contato</a>
            </nav>
        </header>
    )
}