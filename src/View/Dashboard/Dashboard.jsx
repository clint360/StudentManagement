import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div>
    <div><h1>Dashboard</h1></div>  
    <section className='stats'>
    <div className='statcard'>
    <div className='colorbox c1'>
    200
    </div>
    <h2>Total Number of Students</h2>
    </div>
    <div className='statcard'>
    <div className='colorbox c2'>
    5M
    </div>
    <h2>Expected Amount</h2>
    </div>
    <div className='statcard'>
    <div className='colorbox c3'>
    2M
    </div>
    <h2>Paid</h2>
    </div>
    <div className='statcard'>
    <div className='colorbox c4'>
    3M
    </div>
    <h2>Remaining</h2>
    </div>
    </section>
    <section className='schooldistribution'>
      <h1> School Distribution</h1>
    <div>Pie Chart Here</div>
    </section>
    </div>
  )
}

export default Dashboard