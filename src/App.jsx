import Descricao from "./components/descricao"
import Header from "./components/header"
import Projetos from "./components/projetos"
import Skills from "./components/skills"
import Formulario from "./components/formulario"
import Widget from "./components/widget"
import './App.css'

function App() {


  return (
    <>
      <Header></Header>
      <Descricao></Descricao>
      <Skills></Skills>
      <Projetos></Projetos>
      <Formulario></Formulario>
      <Widget></Widget>
      <footer>
        <a target="blank" href="www.linkedin.com/in/laiza-barbosa-1821b7271">Linkedin</a>
        <a target="blank" href="https://github.com/LaizaBarbosa">GitHub</a>
      </footer>
    </>
  )
}

export default App
