import React, { useContext, useRef, forwardRef, useState } from 'react';
import { MainContext } from '../../Hooks/Context';
import './PrintPayment.css'
import ReactToPrint from 'react-to-print';
import { useEffect } from 'react';
import { paymentTemplate } from '../../templates';

const ComponentToPrint = forwardRef(( props, ref ) => {

  const {currency, payments, currentPaymentIndex } = useContext(MainContext);
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
      <div className="letterhead">
        <img src='' />
      </div> 
      <div className="writing">
        <div className="recieptheader">
          <h1>PAYMENT RECIEPT</h1>
        </div>
        <div className="studentinfo">
          Name of Student: <b>{payment.studentName}</b> <br />
          Class: <b>{payment.studentClass}</b><br />
          Admission Number: <b> {payment.adno}</b><br />
          Payment Number: <b> {payment.payno}</b><br />
        </div>
        <div className="boxofdetails">
          <div className="feesdiv">
            <div style={{height: '90%'}}>
          <div className="feesbox">
          <div className='left head'>Fee</div>
          <div className='right head'>Amount</div>
          </div>
          { payment.classFees.map((fee)=> {
            return (<div className="feesbox">
            <div className='left'>{fee.type}</div>
            <div className='right'>{fee.val}</div>
            </div>)
          })
          }
          </div>

          <div className="totalbox">
            <div>Total</div>
            <div><b>200000{currency}</b></div>
          </div> 
          </div>
          <div className="others">
            Amount Paid: <br />
            <span className="amtpaid">Amount paid</span><br />
            Balance: <br />
            <span className="amtpaid">Amount paid</span><br />
            Remarks <br />
            <span className="amtpaid">Amount paid</span><br />
          </div>
        </div>
        <div className="authbox">
          <div className="paidnon a">
          Paid On: <b>{payment.date}</b>
          </div>
          <div className="paidby a">
          At: <b>{payment.time}</b>
          </div>
          <div className="payerssign a">
          Payer's Sign: ____________
          </div>
          <div className="recieverssign a">
          Reciever's Sign: __________
          </div>
        </div>
      </div>
      </div>
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