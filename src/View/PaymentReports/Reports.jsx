import React from 'react'
import './Reports.css'

function Reports() {
  return (
    <div><div><h1>Monthly Reports</h1></div>
    <section className='toolbar'>
    <div>List of Payments</div>
    <div>Select Month: <input type='month' defaultValue={'March'}/></div>
    </section></div>
  )
}

export default Reports