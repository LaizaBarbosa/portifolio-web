import './style.css'
import plannexus from '../../assets/plannexus.png'
import alphadantas from '../../assets/alpha.png'
import chatbot from '../../assets/chatbot.png'

export default function Projetos(){

    return(

            <article id="projetos">
                <h1>Projetos</h1>

                    <div className="esq">

                        <div className="descricao">
                            <h2> PlanNexus</h2>
                            <p> ERP personalizado desenvolvido em grupo para o projeto de conclusão do Senai </p>
                            <div className='tecs'>
                                <sub>Node.js</sub>
                                <sub>MySQL</sub>
                                <sub>Azure</sub>
                                <sub>React</sub>
                                <sub>Swagger</sub>
                            </div>
                            <a href='https://gist.github.com/LaizaBarbosa/64a2cdf8754cf7cdd365092741af03d7' target="_blank"> Ver </a>
                        </div>
                        <div className="imagem">
                            <img src={plannexus} alt="imagem do projeto" />
                        </div>
                    </div>

                    <div className="dir">
                        <div className="descricao">
                            <h2> AlphaDantas </h2>
                            <p> Site criado para a empresa AlphaDantas Consultoria. </p>
                            <div className='tecs'>
                                <sub>React</sub>
                                <sub>TypeScript</sub>
                            </div>
                            <a href='https://alphadantasconsultoria.com.br/' target="_blank"> Ver </a>
                        </div>
                        <div className="imagem">
                            <img src={alphadantas} alt="imagem do projeto" />
                        </div>
                    </div>

                    <div className="esq">
                        <div className="descricao">
                            <h2> ChatBot </h2>
                            <p> ChatBot desenvolvido para web utilizando a API do Gemini(IA do Google) na framework Flask. </p>
                            <div className='tecs'>
                                <sub>Python</sub>
                                <sub>Flask</sub>
                                <sub>Gemini API</sub>
                            </div>
                            <a href='https://www.linkedin.com/posts/laiza-barbosa-1821b7271_ol%C3%A1-rede-quero-compartilhar-com-voc%C3%AAs-um-activity-7201383314149064704-AoUz?utm_source=share&utm_medium=member_desktop' target="_blank"> Ver </a>
                        </div>
                        <div className="imagem">
                            <img src={chatbot} alt="imagem do projeto" />
                        </div>

                    </div>

            </article>
            
    )
}