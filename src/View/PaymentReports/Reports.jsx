import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ExportToExcel } from '../../Components/ExportToExcel';
import { parse } from '../../functions';
import { MainContext } from '../../Hooks/Context';
import './Reports.css'

function Reports() {
  const { currency, payments } = useContext(MainContext);
  const [ reports, setReports ] = useState([]);
  const [querry, setQuerry ] = useState(null);
  const [totalAmount, setTotalAmount ] = useState(0);
  const date = (new Date()).toLocaleDateString()

  useEffect(()=> {
     if(querry !== null) {
     
     } else {
      setReports(payments);
     }
  },[querry])

  useEffect(()=> {
    let sum = reports.reduce((accumulator, object) => {
      return accumulator + +object.amount;
    }, 0);
    setTotalAmount(sum);
  },[querry, reports])

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
           <div className='amounts'>{parse.format(payment.amount)}</div>
           <div className='balancee'>{parse.format(payment.balance)}</div>
           <div className='actionsss'>
            {payment.remark}
           </div>
           </div>
         )})}
         <div className='studenttablerow '>
         <div className='lastrow'> Total: {parse.format(totalAmount)} {currency} </div>
         </div>
         </div>
          </section>
          <section className='exportexcel'> 
          <ExportToExcel data={[...reports]} fileName={`Reports(${date})`} />
      </section>
    </div>
  )
}

export default Reports