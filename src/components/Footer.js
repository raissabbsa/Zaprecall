import { useState } from "react"
import styled from "styled-components"
import ContainerBotoes from "./ContainerBotoes"

export default function Footer({setRespondeu, respondeu, indice}){
    let [qtdd, setQtdd] = useState(0)

    return (
        <FooterConcluidos>
                <ContainerBotoes setQtdd={setQtdd} qtdd={qtdd} 
                setRespondeu={setRespondeu}
                respondeu={respondeu}
                indice={indice}/>
                <p>{qtdd}/8 CONCLUÍDOS</p>
        </FooterConcluidos>
    )
}

const FooterConcluidos = styled.div`
width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

