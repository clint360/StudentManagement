import SideBar from "./SideBar/SideBar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./View/Dashboard/Dashboard";
import './App.css'
import Classes from "./View/Classes/Classes";

function App() {

  return (
<div>
  <div className="tools">
    <div title="Settings">⚙</div>
    <div title="Theme">🎨</div>
    <div title="LogOut Session">📴</div>
  </div>
  <div className="face">
  <div className="sidebarsection">
    <SideBar />
    </div>
  <div className="viewsection">
    <Router>
     <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/classes' element={<Classes />} />
     </Routes>
    </Router>
  </div>
  </div>
</div>
  );
}

export default App;
