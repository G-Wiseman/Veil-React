import { useState } from "react";
import "./CharacterCard.css"





export default function CharacterCard({characterID}) {

  const characterName = "Bobby";

  function StatLine({StatType}){

    const [statValue, setStatValue] = useState(() =>{
      // Do an initial Call to the Database 
      return 100;
    })

    function UserInputOnStatValue (inputValue){
      setStatValue( prevValue => prevValue + inputValue)
    }

    const handleInput = (event) => {
      event.preventDefault();
      let value = Number(event.target.StatLineInputForm.value);
      console.log("log", value, StatType, characterID)
      UserInputOnStatValue(value)
      event.target.reset();
    };
    
    return(
    <div className="StatLine">
      <span className="StatType">{StatType}</span>
  
      <span className="StatLineButtons"> 
        <button> - </button>
        <button className="IncrementButton"> 1</button>
        <button className="IncrementButton"> 5</button>
  
  
        <form onSubmit={handleInput}>
          <input className="StatLineInput" id="StatLineInputForm"></input>
          <button type="submit">Submit</button>
        </form>
  
       
      </span>
      <span className="StatLineValue">{statValue}</span>
    </div>
    )
  
  }

  // Do work here to retrieve the Data associated with this Character from the API.

  return (
    <div className="CharacterCard">
        <div className="Title"> {characterName}</div>

        <div className="BodyCard">

          <StatLine StatType={"Kills"}></StatLine>

            <StatLine StatType={"Unconscious"}></StatLine>

            <StatLine StatType={"Deaths"}></StatLine>

            
          <StatLine StatType={"Nat20s"}></StatLine>
        
          <StatLine StatType={"Nat1s"}></StatLine>

          <StatLine StatType={"Healing"}></StatLine>
          <StatLine StatType={"Damage"}></StatLine>
          <StatLine StatType={"Final Blows"}></StatLine>

        </div>
    </div>

  )
}

