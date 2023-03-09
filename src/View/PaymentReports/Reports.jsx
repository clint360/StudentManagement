import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MainContext } from '../../Hooks/Context';
import './Reports.css'

function Reports() {
  const { currency, payments } = useContext(MainContext);
  const [ reports, setReports ] = useState([]);
  const [querry, setQuerry ] = useState(null);
  
  useEffect(()=> {
     if(querry !== null) {
     
     } else {
      setReports(payments);
     }
  },[querry])

  function handleMonthChange(e) {
    let date = `${e.target.value}`;
    let y = date.split('-')[0];
    let m = date.split('-')[1];
    let newDate = `${m}-${y}`;
    setReports(payments.filter((obj)=> {
      let month = `${(obj.date).split('-')[1]}-${(obj.date).split('-')[2]}`
      return month  === newDate;
    }))
  }

  function handleDateChange(e) {
    let date = `${e.target.value}`;
    let y = date.split('-')[0];
    let m = date.split('-')[1];
    let d = date.split('-')[2];
    let newDate = `${d}-${m}-${y}`;
    setReports(payments.filter((obj)=> {
      return obj.date === newDate;
    }))
  }

  return (
    <div><div><h1>Payment Reports</h1></div>
    <section className='toolbar'>
    <div>List of Payments</div>
    <div>Select Day: <input type='date' placeholder="dd-mm-yyyy" onChange={handleDateChange}/> </div>
    <div>Select Month: <input type='month' onChange={handleMonthChange} /></div>
    </section>
    <section className='classtable'>
      <div className='classtableheader'>
      <div className='payno'>P.No</div>
      <div className='date'>Date</div>
      <div className='by'>Student</div>
      <div className='classss'>Class</div>
      <div className='amounts'>Amount ({currency})</div>
      <div className='balancee'>Balance ({currency})</div>
      <div className='actionsss'>Remark</div>
      </div>
      <div className='table'>
         { reports.map((payment)=>{return (
           <div className='studenttablerow' key={payment.payno}>
           <div className='payno'>{payment.payno}</div>
           <div className='date'>{payment.date}</div>
           <div className='by'>{payment.studentName}</div>
           <div className='classss'>{payment.studentClass}</div>
           <div className='amounts'>{payment.amount}</div>
           <div className='balancee'>{payment.balance}</div>
           <div className='actionsss'>
            {payment.remark}
           </div>
           </div>
         )})}
         </div>
          </section>
          <section className='exportexcel'> 
      <button>📑 Export Excel</button>
      </section>
    </div>
  )
}

export default Reports