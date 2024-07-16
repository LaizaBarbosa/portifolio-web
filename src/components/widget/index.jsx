import './style.css'
import github from '../../assets/git-icon.svg'
import linkedin from '../../assets/linkedin-icon.svg'
import chat from '../../assets/chat.svg'

export default function Widget(){

    const abrirRedes = () => {
        let menu = document.querySelector('.menu')

        menu.style.display === 'none' ? menu.style.display = 'inline-block' : menu.style.display = 'none'
    }

    return(
        <div className="widget">
                <button onClick={abrirRedes}>
                    <img src={chat} alt="ícone redes sociais" />
                </button>
                <div className='menu'>
                <a href="https://github.com/LaizaBarbosa" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="link github" />
                </a>
                <a href="https://linkedin.com/in/laiza-barbosa-1821b7271" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="link linkedin" />
                </a>
            </div>
        </div>
    )
}