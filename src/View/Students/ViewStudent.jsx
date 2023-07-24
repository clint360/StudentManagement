import React, { useContext, useRef, forwardRef } from 'react';
import { MainContext } from '../../Hooks/Context';
import './ViewStudent.css'
import ReactToPrint from 'react-to-print';
import letterhead from '../../Assets/mbcletterhead.png';

const ComponentToPrint = forwardRef(( props, ref ) => {

  const {students, currentStudentIndex } = useContext(MainContext);
  let student = currentStudentIndex? students[currentStudentIndex] : null;

  return (
    <div className='viewstudentmain'>
<div className='viewpaymentmain'>
      <div className="viewpaymentpage"  >
        <div ref={ref}>
      <div className="letterhead">
        <img src={letterhead} alt='School LetterHead' />
      </div> 
      <div className="writing">
        <div className="recieptheader">
          <h1>STUDENT DETAILS</h1>
        </div>
        <div className='photoarea2'>
          <div className='uploadimage'>
            
          </div>
          <div className='imageContainer'>
           <img src={student?.profilePicture} alt='Student' />
          </div>
         </div>
        <div className="studentinfo">
          Name of Student: <b>{student?.name}</b> <br />
          Class: <b>{student?.class}</b><br />
          Admission Number: <b> {student?.adno}</b><br />
          Gender: <b>{student?.sex}</b> <br />
          Date Of Birth: <b>{student?.DOB}</b> <br />
          Place Of Birth: <b>{student?.POB}</b> <br />
          Phone: <b>{student?.phone}</b><br />
          Email: <b>{student?.email}</b><br />
          Guardian: <b>{student?.guardianName}</b><br />
          Address: <b>{student?.Address}</b><br />
        </div>  
        <div className="authbox">
          <div className="paidnon a">
          Registered On: ____________
          </div>
          <div className="paidby a">
          At: ____________
          </div>
          <div className="payerssign a">
          Bursar: ____________
          </div>
          <div className="recieverssign a">
          Student: __________
          </div>
        </div>
      </div>
      </div>
      </div> 
    </div>
    </div>
  )
});



export default function ViewStudent ({close}) {
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


