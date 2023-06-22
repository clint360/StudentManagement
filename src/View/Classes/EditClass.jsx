import React, { useState, useRef, useEffect, useContext } from 'react';
import './NewEntry.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainContext } from '../../Hooks/Context';

function EditClass({close}) {
  const [feetypes, setFeetypes] = useState([]);
  const { currency, classes, setClasses, CCI } = useContext(MainContext);
  const [ total, setTotal ] = useState(0);
  const classRef = useRef(null);
  const feetypeRef = useRef(null);
  const amountRef = useRef(null);
  
  const savedToast = () => toast(`✅ Saved`)

   useEffect(()=>{
    if(CCI !== null) {
    console.log(classes[CCI].name)
    classRef.current.value = classes[CCI].name
    setFeetypes(classes[CCI].fees) 
    }
  },[CCI, classes])

  function totalSetter(value) {
    setTotal(value);
  }

  useEffect(()=>{
    let totalfee = 0;
    if(feetypes) {
   for(let i = 0; i < feetypes.length; i++) {
    totalSetter(totalfee += feetypes[i].val);
   }
   totalSetter(totalfee)
  }
  },[feetypes])

  const deleteFeetype = (index) => {
    setFeetypes(feetypes.filter(item => item !== feetypes[index]))
  }
 
  function saveClass(e) {
    e.preventDefault();
    savedToast()
    classes[CCI] = {
      name: classRef.current.value,
      fees: feetypes
    }
    setClasses(classes)
  }

  function onAdd () {
    if(!feetypeRef.current.value || !amountRef.current.value) {
    } else {
    const newFee = {
      type: feetypeRef.current.value,
      val: +amountRef.current.value
    }
    setFeetypes((prev)=>[...prev, newFee])
    feetypeRef.current.value = null;
    amountRef.current.value = null
  }
}
    <div className="mainContainer">
    <div className='newentry'>
      <div className='opner'>Edit Class and Fees Entry</div>
      <form onSubmit={saveClass}>
      <section className='classdetails'>
      <h1>Class Details</h1>
      Class:<br />
      <input ref={classRef} type='text' required/>
      </section>
      <section className='feedetails'>
      <h1>Fee Details</h1>
       Fee Type: <input ref={feetypeRef} type='text'/>
       <br />
       Amount: <input ref={amountRef} type='number'/>
       <br />
       <button onClick={onAdd} type='button'>Add</button>
       <br />
       <div className='viewaddeditems'>
        <div className='viewrow'>
        <div className="feetype">
        Fee Type
        </div> 
        <div className="amount">
        Amount({currency})
        </div>
        <div className='delete'>
        Delete
        </div> 
        </div>
        {feetypes.map((item, index)=>{return(
        <div className='viewrow1' key={index}>
        <div className="feetype">
        {item.type}
        </div> 
        <div className="amount">
        {item.val}
        </div>
        <div className='delete'>
        <button  onClick={()=>{deleteFeetype(index)}} type='button'>x</button>
        </div> 
        </div>
       )})}
       </div>
       <div>
        Total: {total} {currency}
       </div>
       <button type='submit'>Save</button>
       <button type='button' onClick={close}>Close</button>
      </section>
      </form>
    </div>
    </div>
}

export default EditClass