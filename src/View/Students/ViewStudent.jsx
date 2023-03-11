import React, { useContext } from 'react';
import { MainContext } from '../../Hooks/Context';
import './ViewStudent.css'

function ViewStudent() {
  const {students, currentStudentIndex } = useContext(MainContext);
  let student = students[currentStudentIndex]
  return (
    <div className='viewstudentmain'>
      <div className="viewstudentpage">
       Name: {student.name}
       Class: {student.class}
      </div>
      <br />
    <div className="printstudent"><button> 🖨 Print Doc(PDF)</button></div>   
    </div>
  )
}

export default ViewStudent