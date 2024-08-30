import Card from "../Card";

function Skills({ skills }) {
  const habilidades = [
    {
      titulo: "Node",
      nivel: "Pro-player",
      tempoxp: "1 mês",
      color: "blue"
    },
    {
      titulo: "CSS",
      nivel: "Avançado",
      tempoxp: "16 mês",
      color: "red"
    },
    {
      titulo: "Java",
      nivel: "Pro-player Ultra from Brazil",
      tempoxp: "10 anos",
      color: "green"
    },{
      titulo: "Node",
      nivel: "Pro-player",
      tempoxp: "1 mês",
      color: "blue"
    },
    {
      titulo: "CSS",
      nivel: "Avançado",
      tempoxp: "16 mês",
      color: "red"
    },
    {
      titulo: "Java",
      nivel: "Pro-player Ultra from Brazil",
      tempoxp: "10 anos",
      color: "green"
    },
  ]
  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card 
        dados={habilidades}
      />
        
    </div>
  );
}

export default Skills;