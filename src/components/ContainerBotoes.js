import styled from "styled-components"

export default function ContainerBotoes({setQtdd, qtdd, setRespondeu, indice, respondeu}) {
    function resultado(resp){
        setQtdd(qtdd+1)
        let novoArray=[...respondeu]
        if(resp === "nao"){
            novoArray[indice]=1;
        }
        else if(resp === "quase"){
            novoArray[indice]=2;        
        }
        else{
            novoArray[indice]=3;     
        }
        setRespondeu(novoArray);

    }

    return (
        <Botoes>
            <button onClick={() => resultado("nao")}>Não lembrei</button>
            <button onClick={() => resultado("quase")}>Quase não lembrei</button>
            <button onClick={() => resultado("zap")}>Zap!</button>
        </Botoes>
    )
}

const Botoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    button{
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 5px;
        color: white;
        padding:5px;
        cursor: pointer;
    }
    button:first-child {
        background-color: red;
        border: 1px solid red;
    }
    button:nth-child(2) {
        background-color: #FF922E;
        border: 1px solid #FF922E;
    }
    button:nth-child(3) {
        background-color: #2FBE34;
        border: 1px solid #2FBE34;
    }
    
`