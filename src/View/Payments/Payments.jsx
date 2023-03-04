import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../Hooks/Context';
import './Payments.css'

function Payments() {
 const { currency } = useContext(MainContext)

  return (
    <div>
    <div><h1>Payments</h1></div>
    <section className='toolbar'>
    <div>List of Payments</div>
    <div><input type='text'/><button>Search</button></div>
    <div><button>New Payment</button></div>
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
          </section>
          </div>
  )
}

export default Payments