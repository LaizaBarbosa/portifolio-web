import './style.css'
import github from '../../assets/git-icon.svg'
import linkedin from '../../assets/linkedin-icon.svg'

export default function Header(){
    return(
        <header className="header">
            <div className="sigla">
                LB
            </div>

            <div className="itens-header">
                <a href='#descricao' className='item'>Sobre</a>
                <a href='#skills' className='item'>Projetos</a>
                <a href='#contato' className='item'>Contato</a>
            </div>

            <div className="redes">
                <a href="https://github.com/LaizaBarbosa" target="_blank" rel="noopener noreferrer"><img src={github} alt="Ícone GitHub" /></a>

                <a href="https://www.linkedin.com/in/laiza-silva-barbosa-1821b7271/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Ícone GitHub" /></a>
            </div>
        </header>
    )
}