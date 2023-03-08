import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../Hooks/Context';
import './Reports.css'

function Reports() {
  const { currency } = useContext(MainContext);
  return (
    <div><div><h1>Monthly Reports</h1></div>
    <section className='toolbar'>
    <div>List of Payments</div>
    <div>Select Month: <input type='month' value='March' /></div>
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
    </section>
    </div>
  )
}

export default Reports