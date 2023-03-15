import React, { useContext } from 'react';
import { MainContext } from '../../Hooks/Context';
import './ViewStudent.css'


function ViewStudent({close, print}) {
  const {students, currentStudentIndex } = useContext(MainContext);
  let student = students[currentStudentIndex]
  return (
    <div className='viewstudentmain'>
      <div className="viewstudentpage">
        <img src={student.profilePicture} alt={student.name} />
       Name: {student.name}
       Class: {student.class}
      </div>  
      {/*ddsad*/}
      <br />
    <div className="printstudent">
      <button onClick={close}> 🖨 Close </button>
      <button onClick={print}> 🖨 Print Doc(PDF)</button></div>   
    </div>
  )
}

export default ViewStudent