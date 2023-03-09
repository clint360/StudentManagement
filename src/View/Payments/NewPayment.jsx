import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import Select from 'react-select';
import { MainContext } from '../../Hooks/Context'
import './NewPayment.css'

function NewPayment({close}) {
  const { students, setStudents, classes, currency, payments, setPayments, studentPaying, setStudentPaying }  = useContext(MainContext);
  const [ outstandingBalance, setOutstandingBalance ] = useState(null)
  const classOptions = [...classes.map((item)=> {return(
    {value: item.fees, label: item.name }
  )})] 
 const [studentOptions, setStudentOptions] = useState([]);
 const [studentPayingAdno, setStudentPayingAdno ] = useState(null);
 const [randChange, setRandChange] = useState('')
 const [ selectedClass, setSelectedClass ] = useState([]);
 const [selectedClassFees, setSelectedClassFees] = useState([])
 const amountRef = useRef(null);
 const remarkRef = useRef(null);
 const date = new Date();
 const y = date.getFullYear();
 const m = date.getMonth();
 const d = date.getDay();

 const dateOTD = `${d}-${m}-${y}`

 useEffect(()=> {
  setOutstandingBalance(null)
  setStudentOptions([]);
  let classStudents = students.filter((arr) => {return arr.class === selectedClass})
  setStudentOptions([...classStudents.map((item)=> {return(
    {value: item.adno, label: item.name }
  )})] );
 },[selectedClass, students])  

 useEffect(()=>{
  setOutstandingBalance(null)
  if(studentPayingAdno) {
  let index = students.findIndex((object) => {
    return object.adno === studentPayingAdno
  })
  setStudentPaying(index)
  console.log(studentPaying);
  setOutstandingBalance(students[studentPaying].balance)
}
 },[randChange, setStudentPaying, studentPaying, studentPayingAdno, students])


 function payNum(adno) {
    return `P${adno}${payments.length + 1}`
 }

const savePayment = (e) => {
  e.preventDefault();
 let amt = +amountRef.current.value
 let paidFee = students[studentPaying].paidFee + amt
 let balance = students[studentPaying].payableFee - paidFee 
 
 students[studentPaying].balance = balance;
 students[studentPaying].paidFee = paidFee;

 setStudents(students)
 const payment = {
    payno: payNum(studentPayingAdno),
    date: dateOTD,
    studentName: students[studentPaying].name,
    adno: students[studentPaying].adno,
    studentClass: students[studentPaying].class,
    classFees: selectedClassFees,
    amount: amountRef.current.value,
    balance: students[studentPaying].balance,
    remark: remarkRef.current.value
  }
  setPayments((prev) => [...prev, payment]);
  amountRef.current.value = null;
  setOutstandingBalance(null);
  remarkRef.current.value = null;
}


  return (
    <div className='newpayment'>
      <div className='opner'>New Payment</div>
      <form onSubmit={savePayment}>
      <div className='studentinformation'>
      Class: <Select
       options={classOptions}
       onChange={
        (e) => {setSelectedClass(e.label); setSelectedClassFees(e.value)}
      }
      defaultValue={null}
      />
      Student: <Select 
      options={studentOptions}
      defaultValue={null}
       onChange={
        (e) => 
        { 
          setStudentPayingAdno(()=>{return e.value});
          setRandChange('..', e.value)
        }}  
        onClick={()=>{setRandChange('...')}}
        />
      <br />
      <legend>Outstanding  Balance:</legend>
      <input readOnly value={ outstandingBalance ? `${outstandingBalance} ${currency}`: '' } style={{color: 'red'}}/>
      <br />
      <legend>Amount:</legend>
      <input type='number' name='amt' ref={amountRef} required/>
      <br />
      <legend>Remarks:</legend>
      <input type="text" ref={remarkRef} />
      </div>
      <button className='save' type='submit'>SAVE</button>
      <button className='cancel' type='button' onClick={close}>CANCEL</button>
      </form>
      </div>
  )
}

export default NewPayment