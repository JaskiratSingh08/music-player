
import { MusicProvider } from './context/Musiccontext.js';
import Home from './pages/Home.js';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

/*<Route path="/home" component={<Home/>}/>*/

function App() {
  

  return (
    <MusicProvider>
    
      <Home/>
    </MusicProvider>
  );
}
export default App;
