import React, { useContext, useState } from 'react';
import { MainContext } from '../../Hooks/Context';
import EditStudent from './EditStudent';
import NewStudent from './NewStudent';
import './Students.css'
import ViewStudent from './ViewStudent';

function Students() {
  const { students, setStudents, currency, setCurrentStudentIndex } = useContext(MainContext);
  const [newStudentViewState, setNewStudentViewState] = useState('none')
  const [editStudentViewState, setEditStudentViewState] = useState('none')
  const [viewStudentViewState, setViewStudentViewState ] = useState('none')
  return (
    <div className='students'>
      <div style={{display: newStudentViewState}} className='newentrydiv'><NewStudent close={()=>{setNewStudentViewState('none')}} /></div>
      <div style={{display: editStudentViewState}}  className='newentrydiv'><EditStudent close={()=>{setEditStudentViewState('none')}} /></div>
      <div style={{display: viewStudentViewState}}  className='newentrydiv'><ViewStudent close={()=>{setViewStudentViewState('none')}} /></div>
     <div>
     <div><h1>Students</h1></div>
      <section className='toolbar'>
      <div>List of Students</div>
      <div><input type='text'/><button>Search</button></div>
      <div><button onClick={()=>{setNewStudentViewState('initial')}}>New Student</button></div>
      </section>
      <section className='classtable'>
      <div className='classtableheader'>
      <div className='adno'>A.No</div>
      <div className='name'>Student Name</div>
      <div className='sex'>Sex</div>
      <div className='classs'>Class</div>
      <div className='payable'>Payable ({currency})</div>
      <div className='paid'>Paid ({currency})</div>
      <div className='bal'>Balance ({currency})</div>
      <div className='actions'>Action</div>
      </div>
      <div className='table'>
       { students.map((item, index)=> { return (
        <div className='studenttablerow' key={item.adno}>
        <div className='adno'>{item.adno}</div>
        <div className='name'>{item.name}</div>
        <div className='sex'>{item.sex}</div>
        <div className='classs'>{item.class}</div>
        <div className='payable'>{item.payableFee}</div>
        <div className='paid'>{item.paidFee}</div>
        <div className='bal'>{(item.payableFee - item.paidFee)}</div>
        <div className='actions action'>
        <button onClick={()=>{setCurrentStudentIndex(index); setEditStudentViewState('initial')}}>Edit</button>
        <button>Delete</button>
        <button onClick={()=>{setCurrentStudentIndex(index); setViewStudentViewState('initial')}}>👁</button>
        </div>
        </div>
      )}) }
      </div>
      </section>
      <section className='exportexcel'> 
      <button>📑 Export Excel</button>
      </section>
      </div>
    </div>
  )
}

export default Students