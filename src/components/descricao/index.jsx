import './style.css'
import ilustracao from '../../assets/ilustracao.svg'

export default function Descricao(){
    return(
        <article id="descricao">
            <section className="texto">
                <h2>Oie! Eu sou a Laiza Barbosa</h2>
                <h1>Web Developer</h1>
                <p>
                    Sou de São Paulo, tenho 20 anos e recentemente finalizei o curso técnico em Desenvolvimento de Sistemas pelo SENAI, que foi minha porta de entrada no mundo da programação. Agora planejo seguir os estudos criando aplicações web que irão solucionar problemas reais no seu negócio! 
                </p>
            </section>
            <aside className="ilustracao">
                <img src={ilustracao} alt="ilustração de desenvolvedora" />
            </aside>
        </article>
    )
}