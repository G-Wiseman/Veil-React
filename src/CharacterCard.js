import { useState } from "react";
import "./CharacterCard.css"





export default function CharacterCard({characterID}) {

  var characterName = "Damaia"
  function StatLine({StatType}){
    const [statValue, setStatValue] = useState(() =>{
      // Do an initial Call to the Database 
      return 100;
    })

    const[inputSign, setInputSign] = useState(() => {
      return {next:"-", scaleValue:1};
    })

    function UserInputOnStatValue (inputValue){
      setStatValue( prevValue => prevValue + inputValue)
    };

    const handleSignButton = () =>{
      setInputSign( prevSign => {
        if (prevSign.scaleValue < 0){
          return {scaleValue: 1, next: "-"};
        }
        else{
          return {scaleValue: -1, next: "+"};
        }
      });
        

    };

    const handleIncrementButton = (event) => {
      let value = Number(event.target.value)
      setStatValue(prevValue => prevValue + (inputSign.scaleValue * value))
    };

    const handleFormInput = (event) => {
      event.preventDefault();
      let value = Number(event.target.StatLineInputForm.value);
      console.log("log", value, StatType, characterID)
      UserInputOnStatValue(value)
      event.target.reset();
    };
    
    return(
    <div className="StatLine">
      <span className="StatType">{StatType}</span>
  
      <span className="StatLineInputs"> 
        
          <button id="SignButton" onClick={handleSignButton}> {inputSign.next} </button>
          <button value="1" className="IncrementButton" onClick={handleIncrementButton}>{1 * inputSign.scaleValue}</button>
          <button value="10" className="IncrementButton" onClick={handleIncrementButton}>{10 * inputSign.scaleValue}</button>
  
        <form onSubmit={handleFormInput}>
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

