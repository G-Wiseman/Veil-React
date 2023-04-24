export default function PartySelect () {
    var parties = ["Party 1", "Group2"]



  return (
  <div className='party-select'>
      <div className='parties'>
          {parties.map((party) => (
              <div className='party'> {party}</div>))}
      </div>

      SHOW A WAY TO ADD NEW PARTIES?
  </div>
  )
}
