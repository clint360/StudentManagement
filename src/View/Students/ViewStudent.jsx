import React, { useContext, useRef, forwardRef } from 'react';
import { MainContext } from '../../Hooks/Context';
import './ViewStudent.css'
import ReactToPrint from 'react-to-print';

const ComponentToPrint = forwardRef(( props, ref ) => {

  const {students, currentStudentIndex } = useContext(MainContext);
  let student = students[currentStudentIndex]
  return (
    <div className='viewstudentmain'>
      <div className="viewstudentpage"  ref={ref}>
        <img style={{width: '300px'}} src={student.profilePicture} alt={student.name} />
      <br />
       Name: {student.name}
       <br />
       Class: {student.class}
      </div>  
      <br />
       
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


