import "./CharacterCard.css"


export default function CharacterCard({characterID}) {

  // Do work here to retrieve the Data associated with this Character from the API.

  return (
    <div className="CharacterCard">
        <header className="Title"> {characterID}</header>

        <body className="BodyCard">

            <div className="StatLine">
              Kills
            </div>

            <div className="StatLine">
              Times Unconcious
            </div>

            <div className="StatLine">
              Deaths
            </div>

            <div className="StatLine">
              Nat 20s
            </div>

            <div className="StatLine">
              Nat 1s
            </div>

            <div className="StatLine">
              Healing Done
            </div>

            <div className="StatLine">
              Damage Done
            </div>

            <div className="StatLine">
              Final Blows
            </div>

        </body>
    </div>

  )
}

