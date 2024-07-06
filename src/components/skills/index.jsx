import './style.css'

// react, js, css, html, tailwind, axios
// Node, Java, MySQl, MongoDB, Sequelize, Express

export default function Skills(){
    return(
        <article id="skills">
            <h1>Skills</h1>
            <section className="stack">
                <h2>Front-End</h2>
                <div className="tecnologias">
                    <div className='card' >
                        <img src="src/assets/icon-html.svg" alt="HTML" />
                    </div>
                    <div className='card' >
                        <img src="src/assets/icon-js.svg" alt="JavaScript" />
                    </div>
                    <div className='card' >
                        <img src="src/assets/icon-css.svg" alt="CSS" />
                    </div>
                    <div className='card' >
                        <img src="src/assets/icon-tailwind.svg" alt="TailWind CSS" />                        
                    </div>
                    <div className='card' >
                        <img src="src/assets/icon-react.svg" alt="React" />
                    </div>

                </div>
            </section>
            <section className="stack">
                <h2>Back-End</h2>
                <div className="tecnologias">
                    <div className='card' >
                        <img src="src/assets/icon-node.svg" alt="Node.js" />
                    </div>
                    <div className='card' >
                        <img src="src/assets/icon-ex.svg" alt="Express" />
                    </div>
                    <div className='card' >
                        <img src="src/assets/icon-seq.svg" alt="Sequelize" />
                    </div>
                    <div className='card' >
                        <img src="src/assets/icon-java.svg" alt="Java" />
                    </div>
                    <div className='card' >
                        <img src="src/assets/icon-python.svg" alt="Python" />
                    </div>
                    <div className='card' >
                        <img src="src/assets/icon-mongo.svg" alt="MongoDB" />
                    </div>
                    <div className='card' >
                        <img src="src/assets/icon-mysql.svg" alt="MySQL" />
                    </div>
                    <div className='card' >
                        <img src="src/assets/icon-linux.svg" alt="Linux" />
                    </div>
                </div>
            </section>
        </article>
    )
}

