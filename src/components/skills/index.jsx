import './style.css'
import icon_html from '../../assets/icon-html.svg'
import icon_js from '../../assets/icon-js.svg'
import icon_css from '../../assets/icon-css.svg'
import tailwind from '../../assets/icon-tailwind.svg'
import icon_react from '../../assets/icon-react.svg'
import icon_node from '../../assets/icon-node.svg'
import express from '../../assets/icon-ex.svg'
import java from '../../assets/icon-java.svg'
import python from '../../assets/icon-python.svg'
import mongo from '../../assets/icon-mongo.svg'
import mysql from '../../assets/icon-mysql.svg'
import linux from '../../assets/icon-linux.svg'
import swagger from '../../assets/swagger.svg'
import sequelize from '../../assets/icon-seq.svg'

export default function Skills(){
    return(
        <article id="skills">
            <h1>Skills</h1>
            <section className="stack">
                <h2>Front-End</h2>
                <div className="tecnologias">
                    <div className='card' >
                        <img src={icon_html} alt="HTML" />
                    </div>
                    <div className='card' >
                        <img src={icon_js} alt="JavaScript" />
                    </div>
                    <div className='card' >
                        <img src={icon_css} alt="CSS" />
                    </div>
                    <div className='card' >
                        <img src={tailwind} alt="TailWind CSS" />                        
                    </div>
                    <div className='card' >
                        <img src={icon_react} alt="React" />
                    </div>

                </div>
            </section>
            <section className="stack">
                <h2>Back-End</h2>
                <div className="tecnologias">
                    <div className='card' >
                        <img src={icon_node} alt="Node.js" />
                    </div>
                    <div className='card' >
                        <img src={express} alt="Express" />
                    </div>
                    <div className='card' >
                        <img src={sequelize} alt="Sequelize" />
                    </div>
                    <div className='card' >
                        <img src={java} alt="Java" />
                    </div>
                    <div className='card' >
                        <img src={python} alt="Python" />
                    </div>
                    <div className='card' >
                        <img src={mongo} alt="MongoDB" />
                    </div>
                    <div className='card' >
                        <img src={mysql} alt="MySQL" />
                    </div>
                    <div className='card' >
                        <img src={linux} alt="Linux" />
                    </div>
                    <div className='card' >
                        <img src={swagger} alt="Swagger" />
                    </div>
                </div>
            </section>
        </article>
    )
}

