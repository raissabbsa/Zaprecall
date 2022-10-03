import styled from "styled-components"
import perguntas from "./components/PERGUNTAS"
import LogoContainer from "./components/LogoContainer"
import Footer from "./components/Footer"
import ListaPerguntas from "./components/ListaPerguntas"
import { useState } from "react"
import ResetStyle from "./globalStyles"

export default function App() {
    let [respondeu , setRespondeu] =useState([0,0,0,0,0,0,0,0]);
    let [indice, setIndice]= useState();

    return (
        <Container>
            <ResetStyle />
            <LogoContainer/>
            <ListaPerguntas perguntas={perguntas} 
            respondeu={respondeu}
            setRespondeu={setRespondeu}
            setIndice={setIndice}/>
            <Footer setRespondeu={setRespondeu} respondeu={respondeu} indice={indice}/>
        </Container>)
}

const Container = styled.div`
    font-family: 'Recursive', sans-serif;
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