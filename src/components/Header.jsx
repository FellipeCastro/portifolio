import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <h1>Fellipe Castro</h1>

            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Project</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}