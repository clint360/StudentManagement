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

function App() {
  const [currency, setCurrency] = useState("XAF");
  const [CCI, setCCI] = useState(null);
  const [classes, setClasses] = useState([
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
        },
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
        },
      ],
    },
  
 ]);

  const [students, setStudents] = useState([
    {
      name: "Chia Clint Animbom",
      adno: "F101",
      sex: "M",
      class: "Form 2",
      profilePicture: "",
      guardianName: "Mr Ferdinand",
      phone: "677806233",
      email: "clintani360@gmail.com",
      DOB: "28-07-2005",
      POB: "Mbingo",
      Address: "Obili",
      payableFee: 50000,
      paidFee: 0,
      balance: 50000,
    },
  ]);
  const [ payments, setPayments ] = useState([

  ])

  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [ studentPaying, setStudentPaying ] = useState(0);
  const [colorTheme, setColorTheme] = useState('#000');


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
          setStudentPaying
        }}
      >
        
        <div className='tools'>
          <div title='Settings'>⚙</div>
          <div title='Theme'>🎨<input type='color' onChange={(e)=>{setColorTheme(e.target.value)}} /></div>
          <div title='LogOut Session'>📴</div>
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
            </Routes>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
