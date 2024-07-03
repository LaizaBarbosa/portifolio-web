import './style.css'
import git from '../../assets/git-icon.svg'
import linkedin from '../../assets/linkedin-icon.svg'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header className="header">
            <div className="sigla">
                LB
            </div>

            <div className="itens-header">
                <Link className='item'>Sobre</Link>
                <Link className='item'>Projetos</Link>
                <Link className='item'>Contato</Link>
            </div>

            <div className="redes">
                <a href="http://github.com/LaizaBarbosa" target="_blank" rel="noopener noreferrer"><img src={git} alt="Ícone GitHub" /></a>

                <a href="http://linkedin" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Ícone GitHub" /></a>
            </div>
        </header>
    )
}