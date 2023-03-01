import React from 'react';
import './Classes.css'

function Classes() {
  return (
    <div>
      <div><h1>Classes</h1></div>
      <section className='toolbar'>
      <div>List of Classes and Fees</div>
      <div><input type='text'/><button>Search</button></div>
      <div><button>New Entry</button></div>
      </section>
      <section className='classtable'>
      <div className='classtableheader'>
      <div className='no'>No</div>
      <div className='class'>Class</div>
      <div className='totalfee'>Total Fee</div>
      <div className='action'>Action</div>
      </div>
      <div className='classtableentry'>
      <div className='no'>1</div>
      <div className='class'>Form 1</div>
      <div className='totalfee'>200,000</div>
      <div className='action'>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      </div>
      
      </section>
    </div>
  )
}

export default Classes