import './style.css'
import emailjs from '@emailjs/browser'
import React, {useRef, useState} from 'react'


export default function Formulario(){

    const id_service = import.meta.env.VITE_ID_SERVICE
    const id_template = import.meta.env.VITE_ID_TEMPLATE
    const public_key = import.meta.env.VITE_PUBLIC_KEY
    
    const form = useRef()
    const [stateMsg, setStateMsg] = useState(null)

    const enviarEmail = (e) => {
        e.preventDefault()

        let mensagem = document.getElementById('mensagem').value;

        if (!mensagem) {
            setStateMsg('O campo mensagem é obrigatório.');
            setTimeout(() => {
                setStateMsg(null)
              }, 5000)
            return;
        }

        emailjs.sendForm(id_service, id_template, form.current, {publicKey: public_key})
        .then(
            () => {
              setStateMsg('Mensagem enviada com sucesso!')
              document.getElementById('nome').value = ''
              document.getElementById('assunto').value = ''
              document.getElementById('mensagem').value = ''
              setTimeout(() => {
                setStateMsg(null)
              }, 5000)
            },
            (error) => {
              setStateMsg('Algo deu errado: ' + error)
            },
          );
    }


    return(
        <article id='contato'>
            <h1>Contato</h1>
            <form ref={form} onSubmit={enviarEmail}>
                {stateMsg && <p>{stateMsg}</p> }
                <div className="input nome">
                    <label htmlFor="nome">Seu nome</label>
                    <input type="text" name="nome" id='nome' />
                </div>

                <div className="input assunto">
                    <label htmlFor="assunto">Assunto</label>
                    <input type="text" name="assunto" id='assunto'/>
                </div>

                <div className="input msg">
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea name="mensagem" id='mensagem' cols="30"></textarea>
                </div>

                <button type='submit'>Enviar <img src="src/assets/send.svg"/></button>
            </form>
        </article>
    )
}