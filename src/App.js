import styled from "styled-components"
import perguntas from "./components/PERGUNTAS"
import LogoContainer from "./components/LogoContainer"
import Footer from "./components/Footer"
import ListaPerguntas from "./components/ListaPerguntas"

export default function App() {
    return (
        <Container>
            <LogoContainer/>
            <ListaPerguntas perguntas={perguntas}/>
            <Footer/>
        </Container>)
}

const Container = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`