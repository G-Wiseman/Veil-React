import "./PartySelect.css"

export default function PartySelect () {
    var parties = ["Golden Genesis", "The Avengers", "The Team"]

    function PartyCard({partyId}) {
        // Get info on the party
        
        return (
            <div className="PartyCard">
                <span className="PartyCardName">{partyId}</span>
                <span>PARTY DESCRIPTION HERE </span>
                <span>Number of Users: 5</span>
            </div>
        )
    }


    return (
    <div className='party-select'>
        <div className='parties'>
            {parties.map((party) => (
                <PartyCard partyId={party} className='party'></PartyCard>))}
        </div>

        SHOW A WAY TO ADD NEW PARTIES?
    </div>
    )
}
