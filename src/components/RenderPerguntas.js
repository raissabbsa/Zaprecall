import { useState } from "react"
import styled from "styled-components"
import seta_play from "../img/seta_play.png"
import seta_virar from "../img/seta_virar.png"
import icone_certo from "../img/icone_certo.png"
import icone_erro from "../img/icone_erro.png"
import icone_quase from "../img/icone_quase.png"

export default function RenderPerguntas({ perguntas,respondeu, setIndice, index}) {
    let [perguntaCartao, setPergunta] = useState(perguntas.pergunta)
    let [icone, setIcone] = useState(seta_play)

    function viraCartao() {
        
        if (icone === seta_play) {
            setPergunta(perguntas.questao);
            setIcone(seta_virar);
            setIndice(index);
            
        }
        else if (icone === seta_virar) {
            setPergunta(perguntas.resposta);
            setIcone("");
            setIndice(index);
        }   
    }
    if(icone === seta_play) {
        return (
            <PerguntaFechada cor = "#333333">
                <p>{perguntaCartao}</p>
                <img onClick={viraCartao} src={icone} alt="" />
            </PerguntaFechada>
        )
        
    }
    else if(respondeu[index] === 1){
        return (
            <PerguntaFechada cor="#FF3030" finalizada="1">
                <p>{perguntas.pergunta}</p>
                <img onClick={viraCartao} src={icone_erro} alt="" />
            </PerguntaFechada>
        )
    }
    else if(respondeu[index] === 2){
        return (
            <PerguntaFechada cor="#FF922E" finalizada="1">
                <p>{perguntas.pergunta}</p>
                <img onClick={viraCartao} src={icone_quase} alt="" />
            </PerguntaFechada>
        )
    }
    else if(respondeu[index] === 3){
        return (
            <PerguntaFechada cor="#2FBE34" finalizada="1">
                <p>{perguntas.pergunta}</p>
                <img onClick={viraCartao} src={icone_certo} alt="" />
            </PerguntaFechada>
        )
    }
    else{
        return (
            <PerguntaAberta>
                <p>{perguntaCartao}</p>
                <img onClick={viraCartao} src={icone} alt="" />
            </PerguntaAberta>
        )
    }
    

}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        cursor: ${props => props.finalizada === "1" ? "" : "pointer"};
    }
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.cor};
        text-decoration: ${props => props.finalizada === "1" ? "line-through" : ""};
    }
    
`
const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor:pointer;
      }

`