import React, { useContext } from 'react';
import { MainContext } from '../../Hooks/Context';
import NewStudent from './NewStudent';
import './Students.css'

function Students() {
  const { students, setStudents, currency } = useContext(MainContext);

  return (
    <div className='students'>
      <div className='newentrydiv'><NewStudent /></div>
     <div><h1>Students</h1></div>
      <section className='toolbar'>
      <div>List of Students</div>
      <div><input type='text'/><button>Search</button></div>
      <div><button>New Student</button></div>
      </section>
      <section className='classtable'>
      <div className='classtableheader'>
      <div className='adno'>AdNo</div>
      <div className='name'>Student Name</div>
      <div className='sex'>Sex</div>
      <div className='classs'>Class</div>
      <div className='payable'>Payable ({currency})</div>
      <div className='paid'>Paid ({currency})</div>
      <div className='bal'>Balance ({currency})</div>
      <div className='actions'>Action</div>
      </div>
       { students.map((item, index)=> { return (
        <div className='studenttablerow'>
        <div className='adno'>{item.adno}</div>
        <div className='name'>{item.name}</div>
        <div className='sex'>{item.sex}</div>
        <div className='classs'>{item.class}</div>
        <div className='payable'>{item.payableFee}</div>
        <div className='paid'>{item.paidFee}</div>
        <div className='bal'>{(item.payableFee - item.paidFee)}</div>
        <div className='actions action'>
        <button>Edit</button>
        <button>Delete</button>
        <button>👁</button>
        </div>
        </div>
      )}) }
      </section>
    </div>
  )
}

export default Students