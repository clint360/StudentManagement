import SideBar from "./SideBar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./View/Dashboard/Dashboard";
import "./App.css";
import Classes from "./View/Classes/Classes";
import { Provider } from "./Hooks/Context";
import { useState } from "react";
import Students from "./View/Students/Students";
import Payments from "./View/Payments/Payments";
import Reports from "./View/PaymentReports/Reports";
import SchoolInventory from "./View/SchoolInventory/SchoolInventory";


function App() {
  const [currency, setCurrency] = useState("FCFA");
  const [CCI, setCCI] = useState(null);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [payments, setPayments] = useState([])
  const [currentStudentIndex, setCurrentStudentIndex] = useState(null);
  const [currentPaymentIndex, setCurrentPaymentIndex] = useState(null);
  const [studentPaying, setStudentPaying] = useState(0);
  const [colorTheme, setColorTheme] = useState('#000');
  let [sMD, sSMD] = useState('none')

  return (
    <Router>
      <Provider
        value={{
          classes,
          setClasses,
          currency,
          CCI,
          setCCI,
          students,
          setStudents,
          currentStudentIndex,
          setCurrentStudentIndex,
          colorTheme,
          payments,
          setPayments,
          studentPaying,
          setStudentPaying,
          currentPaymentIndex,
          setCurrentPaymentIndex
        }}
      >

        <div className='tools'>
          <div title='Settings' onClick={() => { sMD === 'none' ? sSMD('initial') : sSMD('none') }}>⚙</div>
          <div title='LogOut Session'>📴</div>
        </div>

        <div className="settingsModal" style={{ display: sMD }}>
          <div title='Theme'>🎨: <input type='color' onChange={(e) => { setColorTheme(e.target.value) }} /></div>
          CURRENCY: <input defaultValue={currency} onChange={(e) => { setCurrency((e.target.value).toUpperCase()) }} />

          <br />
          Change Password
          Password: <input />
        </div>

        <div className='face'>
          <div className='sidebarsection'>
            <SideBar />
          </div>

          <div className='viewsection'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/classes' element={<Classes />} />
              <Route path='/students' element={<Students />} />
              <Route path='/payments' element={<Payments />} />
              <Route path='/reports' element={<Reports />} />
              <Route path='/inventory' element={<SchoolInventory />} />
            </Routes>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
