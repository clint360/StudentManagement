import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { MainContext } from '../../Hooks/Context';
import EditStudent from './EditStudent';
import NewStudent from './NewStudent';
import './Students.css'
import ViewStudent from './ViewStudent';
import Select from 'react-select'

function Students() {
  const { students, setStudents, classes, currency, setCurrentStudentIndex } = useContext(MainContext);
  const [newStudentViewState, setNewStudentViewState] = useState('none')
  const [editStudentViewState, setEditStudentViewState] = useState('none')
  const [viewStudentViewState, setViewStudentViewState ] = useState('none')
  const [ querriedStudents, setQuerriedStudents ] = useState([]);
  const [ q, sQS ] = useState([])
  const [ querry, setQuerry ] = useState(null);

  const isPaid = [
    {value: 'all', label: 'All' },
    {value: true, label: 'Paid' },
    {value: false, label: 'Owing' }
  ]
  const classOptions = [{value: 'all', label: 'All' }, ...classes.map((item)=> {return(
    {value: item.name, label: item.name }
  )})]

  useEffect(()=>{
  const sortedList = querriedStudents.sort((a, b) =>
      a.name.localeCompare(b.name));
      setQuerriedStudents([...sortedList])
      sQS([...sortedList]);
  },[students])

  useEffect(()=>{
    if(querry !== null) {
    
    } else
     {
      setQuerriedStudents([...students])
      sQS([...students]);
      }
    },[students])

  function onByClassChange(e){
    if(e.value === 'all') {
      setQuerriedStudents([...students])
      sQS([...students]);
    } else {
    setQuerriedStudents(students.filter((obj)=> {
      return obj.class  === e.value
    }))
    sQS(students.filter((obj)=> {
      return obj.class  === e.value
    }));
  }
}

function onByBalanceChange(e) {
  if(e.value === 'all') {
    setQuerriedStudents([...q])
  } else {
    if(e.value === true) {
  setQuerriedStudents(q.filter((obj)=> {
    return obj.balance  <= 0
}))} else {
  if(e.value === false) {
    setQuerriedStudents(q.filter((obj)=> {
      return obj.balance  > 0
  }))
}}
  }
}
  
function onSearch(e) {
  if(e.target.value === null || e.target.value === '') {
    setQuerriedStudents([...q])
  } else {
  const query = e.target.value;
  const searchList = querriedStudents.filter((item) => {
    return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
  setQuerriedStudents(searchList)
}
}


  return (
    <div className='students'>
      <div style={{display: newStudentViewState}} className='newentrydiv'><NewStudent close={()=>{setNewStudentViewState('none')}} /></div>
      <div style={{display: editStudentViewState}}  className='newentrydiv'><EditStudent close={()=>{setEditStudentViewState('none')}} /></div>
      <div style={{display: viewStudentViewState}}  className='newentrydiv'><ViewStudent close={()=>{setViewStudentViewState('none')}} /></div>
     <div>
     <div><h1>Students</h1></div>
      <section className='toolbar'>
      <div>List of Students</div>
      <div><div className='flex'>By Class<Select options={classOptions} onChange={onByClassChange} /></div></div>
      <div className='flex'>By Balance <div><Select options={isPaid} onChange={onByBalanceChange}/></div></div>
      <div><input type='text' placeholder='Search Name' onChange={onSearch}/></div>
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
       { querriedStudents.map((item, index)=> { return (
        <div className='studenttablerow' key={item.adno} style={{background: (item.balance === 0 ) ? "#b7f7a582" : "white"}}>
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
        <button onClick={()=>{setCurrentStudentIndex(index); setViewStudentViewState('initial')}}>????</button>
        </div>
        </div>
      )}) }
      </div>
      </section>
      <section className='exportexcel'> 
      <button>???? Export Excel</button>
      </section>
      </div>
    </div>
  )
}

export default Students