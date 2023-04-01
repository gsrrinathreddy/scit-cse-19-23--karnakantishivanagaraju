import './App.css';
import INavbar from './components/INavbar';
import { Routes,Route } from 'react-router-dom';
import AboutMe from './pages/Aboutme';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <div className="App">
      <INavbar/>
    
    <Routes>
      <Route path="/Aboutme" element={<AboutMe/>}/>
      <Route path="/Qualification" element={<Qualification/>}/>
      <Route path="Hobbies" element={<Hobbies/>}/>
      <Route path="/Experience" element={<Experience/>}/>
      <Route path="/Skills" element={<Skills/>}/>
   

 
    </Routes>


    </div>
  );
}

export default App;
