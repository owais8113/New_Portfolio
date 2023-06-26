import './App.css';
import Main from './Components/Main'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Project1 from './Components/Project1';
import Project2 from './Components/Project2';
import Project3 from './Components/Project3';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      {/* <Main/> */}
        <Route path="/" element={<Main />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
