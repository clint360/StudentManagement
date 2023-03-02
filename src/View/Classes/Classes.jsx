import React, {useContext, useEffect} from 'react';
import './Classes.css';
import { MainContext } from '../../Hooks/Context';
import NewEntry from './NewEntry';
import { useState } from 'react';
import EditClass from './EditClass';

function Classes() {
  const { classes, setClasses, currency, setCCI } = useContext(MainContext)
  const [newEntryViewState, setNewEntryViewState] = useState('none')
  const [editEntryViewState, setEditEntryViewState] = useState('none')

  useEffect(()=>{
    let a = classes[1].fees
   console.log(a[1].val)
  },[])

  function deleteClass(index) {
    setClasses(classes.splice(index, 1));
  }

  function calcTotalAmount(index) {
    let arr = classes[index].fees
    let totalAmount = 0;
    for(let i = 0; i < arr.length; i ++) {
     totalAmount += arr[i].val; 
    }
    return totalAmount
  }

  return (
    <div className='classes'>
       <div className='newentrydiv' style={{display: newEntryViewState}}><NewEntry close={()=>{setNewEntryViewState('none')}} /></div>
       <div className='newentrydiv' style={{display: editEntryViewState}}><EditClass close={()=>{setEditEntryViewState('none')}} /></div> 
      <div><h1>Classes</h1></div>
      <section className='toolbar'>
      <div>List of Classes and Fees</div>
      <div><input type='text'/><button>Search</button></div>
      <div><button onClick={()=>{setNewEntryViewState('initial')}}>New Entry</button></div>
      </section>
      <section className='classtable'>
      <div className='classtableheader'>
      <div className='no'>No</div>
      <div className='class'>Class</div>
      <div className='totalfee'>Total Fee ({currency})</div>
      <div className='action'>Action</div>
      </div>
      { classes.map((item, index)=> { return (
      <div className='classtableentry'>
      <div className='no'>{index + 1}</div>
      <div className='class'>{item.name}</div>
      <div className='totalfee'>{ calcTotalAmount(index)}</div>
      <div className='action'>
        <button onClick={()=>{ setCCI(classes.indexOf(item)); setEditEntryViewState('initial')}}>Edit</button>
        <button onClick={()=>{deleteClass(index)}}>Delete</button>
      </div>
      </div>
      )})
}
      </section>
    </div>
  )
}

export default Classes