import CharacterCard from "./CharacterCard.js"
import "./PartyHomePage.css"

export default function PartyHomePage({partyID}) {
  var characterIDs = ["Alex", "Damaia", "Val", "Axel", "Quinney", "Findir", "Zai"]
//   Do some work with the API to find which characters belong to this party
//  Set the actual values retrieved to the values in the CharacterID array. 
    return(
        <div className="PartyHomePage">
        <header>{partyID}</header>
        <div className="CharacterLineup">
            {characterIDs.map((characterID) => (
                <CharacterCard characterID={characterID}></CharacterCard>
            ))}
        </div>
        </div>
    )
}
