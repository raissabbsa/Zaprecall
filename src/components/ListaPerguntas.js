import RenderPerguntas from "./RenderPerguntas"

export default function ListaPerguntas({ perguntas, respondeu, setRespondeu, setIndice}) {
    return (<>
        {perguntas.map((perguntas, index) => (
            <RenderPerguntas
                key={index}
                perguntas={perguntas}
                respondeu={respondeu}
                setRespondeu={setRespondeu}
                setIndice={setIndice}
                index={index}
            />
        ))}
    </>
    )
}