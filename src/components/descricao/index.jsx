import './style.css'
import ilustracao from '../../assets/ilustracao.svg'

export default function Descricao(){
    return(
        <article id="descricao">
            <section className="texto">
                <h1>Oie!</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit quibusdam eaque similique molestiae maiores ea quam voluptates nobis ipsam esse officiis aliquam consequuntur est optio magnam, reprehenderit aut laudantium. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi omnis nobis harum voluptatibus veritatis odit perferendis explicabo rerum quibusdam nihil et quod temporibus repellendus earum numquam facilis maxime, suscipit aut.
                </p>
            </section>
            <aside className="ilustracao">
                <img src={ilustracao} alt="ilustração de deselvolvedora" />
            </aside>
        </article>
    )
}