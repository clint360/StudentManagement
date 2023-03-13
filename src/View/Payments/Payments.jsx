import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { MainContext } from '../../Hooks/Context';
import NewPayment from './NewPayment';
import './Payments.css'
import { parse } from '../../functions';
import { useEffect } from 'react';

function Payments() {
 const { currency, payments } = useContext(MainContext)
 const [ nPVS, sNPVS ] = useState('none');
 const [ querriedPayments, setQuerriedPayments ] = useState([])

 useEffect(()=>{
  setQuerriedPayments(payments)
 },[payments])

 function onSearch(e) {
  if(e.target.value === null || e.target.value === '') {
    setQuerriedPayments([...payments])
  } else {
  const query = e.target.value;
  const searchList = querriedPayments.filter((item) => {
    return item.studentName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
  setQuerriedPayments(searchList)
}
}

  return (
    <div>
     <div className='newentrydiv' style={{display: nPVS}}><NewPayment close={()=> sNPVS('none')}/></div> 
    <div><h1>Payments</h1></div>
    <section className='toolbar'>
    <div>List of Payments</div>
    <div><input type='text' placeholder='Search Name' onChange={onSearch}/></div>
    <div><button onClick={()=> sNPVS('initial')}>New Payment</button></div>
    </section>
          <section className='classtable'>
          <div className='classtableheader'>
          <div className='payno'>P.No</div>
          <div className='date'>Date</div>
          <div className='by'>Student</div>
          <div className='classss'>Class</div>
          <div className='amounts'>Amount ({currency})</div>
          <div className='balancee'>Balance ({currency})</div>
          <div className='actionsss'>Action</div>
          </div>
          <div className='table'>
         { querriedPayments.map((payment)=>{return (
           <div className='studenttablerow' key={payment.payno}>
           <div className='payno'>{payment.payno}</div>
           <div className='date'>{payment.date}</div>
           <div className='by'>{payment.studentName}</div>
           <div className='classss'>{payment.studentClass}</div>
           <div className='amounts'>{parse.format(payment.amount)}</div>
           <div className='balancee'>{parse.format(payment.balance)}</div>
           <div className='actionsss action'>
        <button>Print</button>
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

export default Payments