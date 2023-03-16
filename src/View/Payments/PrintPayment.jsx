import React, { useContext, useRef, forwardRef, useState } from 'react';
import { MainContext } from '../../Hooks/Context';
import './PrintPayment.css'
import ReactToPrint from 'react-to-print';
import { useEffect } from 'react';
import { paymentTemplate } from '../../templates';

const ComponentToPrint = forwardRef(( props, ref ) => {

  const {payments, currentPaymentIndex } = useContext(MainContext);
  const [ payment, setPayment ] = useState(paymentTemplate)
   
  useEffect(()=>{
    if(payments.length >= 0) {
    setPayment(payments[currentPaymentIndex])
  }
},[currentPaymentIndex])


  return (
    <div className='viewpaymentmain'>
      <div className="viewpaymentpage"  >
        <div ref={ref}>
        <img style={{width: '300px'}} src={''} alt={payment.date} />
      <br />
       Name: {payment.studentName}
       <br />
       Date: {payment.date}
       <br />
       Time: {payment.time}
       <br />
       Amount: {payment.amount}
      </div>  
      <br />
      </div> 
    </div>
  ) 
});



export default function PrintPayment ({close}) {
  const componentRef = useRef();
  return (
    <div  className='abs'>
      <ReactToPrint
        trigger={() => <div className="printstudent"><button className='print'> 🖨 Print Doc(PDF)</button></div>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} close={close}/>
      <div className="printstudent">
      <button onClick={close} className='close'> Cancel </button>
      </div>
    </div>
  );
};