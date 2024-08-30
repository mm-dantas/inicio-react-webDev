export default function Card({ dados }) {

    return(
        <>
        {
            dados.map((pegaDados, index) => (
                <div 
                className="skill-card" 
                key={index}
                style={
                    {
                        backgroundColor: pegaDados.color
                    }
                }>
                    <h3>Título: {pegaDados.titulo}</h3>
                    <p>Nível: {pegaDados.nivel}</p>
                    <p>Tempo de xp: {pegaDados.tempoxp}</p>
                    <p>{index}</p>
                </div>
            ))
        }
        </>
    )
}