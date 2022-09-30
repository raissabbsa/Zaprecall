import RenderPerguntas from "./RenderPerguntas"

export default function ListaPerguntas({ perguntas }) {
    return (<>
        {perguntas.map((perguntas, index) => (
            <RenderPerguntas
                key={index}
                perguntas={perguntas}
            />
        ))}
    </>
    )
}