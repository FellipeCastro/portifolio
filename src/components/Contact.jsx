import { useState, useEffect } from 'react'

import emailjs from '@emailjs/browser'

import { FaPaperPlane } from "react-icons/fa"

import imgContact from '../img/img-contact.svg'

import './Contact.css'

export default function Contact() {

    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [message, setMessage] =useState('')
    const [isSent, setIsSent] =useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        if (name === '' || email === '' || message === '') {
            return
        }

        const tamplateParams = {
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send("service_ihup14h", "template_2jb3qg5", tamplateParams, "4C_OWEKlJullg_tLC")
        .then((res) => {
            console.log("E-mail enviado", res.status, res.text)
            setName('')
            setEmail('')
            setMessage('')
            setIsSent(true)

            setTimeout(() => {
              setIsSent(false)
            }, 3000)
        }, (err) => {
            console.log("ERRO: ", err)
        })
    }

    useEffect(() => {
        let timeout;
    
        if (isSent) {
          timeout = setTimeout(() => {
            setIsSent(false);
          }, 5000);
        }
    
        return () => clearTimeout(timeout);
      }, [isSent]);

    return (
        <section className='contact' id='contact'>
            <div className="img-container">
                <img src={imgContact} alt="Contact Image" />
            </div>

            <div className="container-contact">
                <h2>Entre em contato comigo!</h2>

                <form method='post' autoComplete='off' onSubmit={sendEmail}>
                    <div className="input-container">
                        <label htmlFor="name">Nome: </label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Digite seu nome aqui" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="input-container">
                        <label htmlFor="email">E-mail: </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Digite seu e-mail aqui" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="textarea-container">
                        <label htmlFor="message">Mensagem: </label>
                        <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10" 
                            placeholder="Digite sua mensagem aqui" 
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button type='submit' className={`btn ${isSent ? 'sent' : ''}`}>
                        <FaPaperPlane /> - {isSent ? 'Enviado' : 'Enviar'}
                    </button>
                </form>
            </div>
        </section>
    )
}