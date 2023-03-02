import SideBar from "./SideBar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./View/Dashboard/Dashboard";
import "./App.css";
import Classes from "./View/Classes/Classes";
import { Provider } from "./Hooks/Context";
import { useState } from "react";

function App() {
  const [currency, setCurrency] = useState('XAF');
  const [CCI, setCCI] = useState(0);
  const [ classes, setClasses ] = useState([
    {
      name: "Form 1",
      fees: [
        {
          type: "Tuition",
          val: 200000,
        },
      ],
    },
    {
      name: "Form 2",
      fees: [
        {
          type: "Tuition",
          val: 300000,
        },
        {
          type: "Books",
          val: 100000,
        }
      ],
    },
    {
      name: "Form 3",
      fees: [
        {
          type: "Tuition",
          val: 400000,
        },
        {
          type: "Books",
          val: 140000,
        }
      ],
    }
  ]);

  return (
    <Provider value={{ classes, setClasses, currency, CCI, setCCI }}>
      <div className='tools'>
        <div title='Settings'>⚙</div>
        <div title='Theme'>🎨</div>
        <div title='LogOut Session'>📴</div>
      </div>
      <div className='face'>
        <div className='sidebarsection'>
          <SideBar />
        </div>
        <div className='viewsection'>
          <Router>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/classes' element={<Classes />} />
            </Routes>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
