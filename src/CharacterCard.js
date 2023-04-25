import "./CharacterCard.css"


function StatLine({StatType}){
  return(
  <div className="StatLine">
    <div className="StatType">{StatType}</div>
    <div className="StatLineButtons"> 
      <button className="IncrementButton"> +1</button>
      <button className="IncrementButton" > +5</button>
      <button className="IncrementButton"> +20</button>
      <button> - </button>
    </div>
    <div className="StatLineValue">{100}</div>
  </div>
  )

}

export default function CharacterCard({characterID}) {

  // Do work here to retrieve the Data associated with this Character from the API.

  return (
    <div className="CharacterCard">
        <header className="Title"> {characterID}</header>

        <body className="BodyCard">

          <StatLine StatType={"Kills"}></StatLine>

            <StatLine StatType={"Unconscious"}></StatLine>

            <StatLine StatType={"Deaths"}></StatLine>

            
          <StatLine StatType={"Nat20s"}></StatLine>
        
          <StatLine StatType={"Nat1s"}></StatLine>

          <StatLine StatType={"Healing"}></StatLine>
          <StatLine StatType={"Damage"}></StatLine>
          <StatLine StatType={"Final Blows"}></StatLine>

        </body>
    </div>

  )
}

