import './style.css'

export default function Widget(){

    const abrirRedes = () => {
        let menu = document.querySelector('.menu')

        menu.style.display === 'none' ? menu.style.display = 'inline-block' : menu.style.display = 'none'
    }

    return(
        <div className="widget">
                <button onClick={abrirRedes}>
                    <img src="src/assets/chat.svg" alt="ícone redes sociais" />
                </button>
                <div className='menu'>
                <a href="https://github.com/LaizaBarbosa" target="_blank" rel="noopener noreferrer">
                    <img src="src/assets/git-icon.svg" alt="link github" />
                </a>
                <a href="https://linkedin.com/in/laiza-barbosa-1821b7271" target="_blank" rel="noopener noreferrer">
                    <img src="src/assets/linkedin-icon.svg" alt="link linkedin" />
                </a>
            </div>
        </div>
    )
}