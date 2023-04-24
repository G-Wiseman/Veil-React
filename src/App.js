import './App.css'
import { Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        The Broken Veil 
        <div className='LinkBar'>
          <Link className='Links' to="/">Home Page</Link>
          <Link className='Links' to="/profilepage">Profile</Link>
          <Link className='Links' to="/partyselect"> Party Select</Link>
          <Link className='Links' to="/partypage"> Party Page</Link>
        </div>
      </header>
     
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
