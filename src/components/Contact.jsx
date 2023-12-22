import { FaPaperPlane } from "react-icons/fa";

import imgContact from '../img/img-contact.svg'

import './Contact.css'

export default function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className="img-container">
                <img src={imgContact} alt="" />
            </div>

            <div className="container-contact">
                <h2>Entre em contato comigo!</h2>

                <form method='post' autoComplete='off'>
                    <div className="input-container">
                        <label htmlFor="name">Nome: </label>
                        <input type="text" name="name" id="name" placeholder="Digite seu nome aqui" required/>
                    </div>

                    <div className="input-container">
                        <label htmlFor="email">E-mail: </label>
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail aqui" required/>
                    </div>

                    <div className="textarea-container">
                        <label htmlFor="message">Mensagem: </label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Digite sua mensagem aqui" required></textarea>
                    </div>

                    <button type="submit" className="btn">
                        <FaPaperPlane /> - Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}