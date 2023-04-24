import { Routes, Route } from 'react-router-dom';
import PartySelect from './PartySelect';
import PartyHomePage from './PartyHomePage';

export default function AppRoutes() {

    return (
        <div>
        <Routes>
                <Route index element= {<p>You are at the home page</p>}></Route>
                <Route path="/profilepage" element= {<p>You don't have a Profile. G needs to add a profile page component before implementing this feature</p>}></Route> 
                <Route path="/partyselect" element= {<PartySelect></PartySelect>}></Route> 
                <Route path="/partypage" element={<PartyHomePage partyID="GoldenGenesis"></PartyHomePage>}></Route>
        </Routes>
        </div>
    )
}
