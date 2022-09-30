import { useState } from "react"
import seta_play from "../img/seta_play.png"
import seta_virar from "../img/seta_virar.png"

export default function RenderPerguntas({perguntas}) {
    let [perguntaCartao, setPergunta] = useState(perguntas.pergunta)
    let [icone, setIcone] = useState(seta_play)
    function viraCartao() {
        setPergunta(perguntas.questao);
        setIcone(seta_virar);
    }

    return (
        <div className="pergunta-fechada">
            <p>{perguntaCartao}</p>
            <img onClick={viraCartao} src={icone} alt="" />
        </div>
    )
}