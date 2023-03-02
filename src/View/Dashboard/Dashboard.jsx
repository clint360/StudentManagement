import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../Hooks/Context'
import './Dashboard.css'

export function m(n, d) {
let x=(''+n).length, p=Math.pow;
d = p(10, d);
x-=x%3
return Math.round(n*d/p(10,x))/d+"kMBTPE"[ x / 3]
}


function Dashboard() {
  const { students, currency } = useContext(MainContext);
  const [expectedAmount, setExpectedAmount] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  
  useEffect(()=>{
    setExpectedAmount(0)
    setExpectedAmount(0)
      for (let i = 0; i < students.length; i++) {
        setExpectedAmount((prev)=>prev+students[i].payableFee)
        setPaidAmount((prev)=>prev+students[i].paidFee)
      }  
   },[students])

  return (
    <div>
    <div><h1>Dashboard</h1></div>  
    <section className='stats'>
    <div className='statcard'>
    <div className='colorbox c1'>
    {students.length}
    </div>
    <h2>Total Number of Registered Students</h2>
    </div>
    <div className='statcard'>
    <div className='colorbox c2'>
    {expectedAmount} {currency}
    </div>
    <h2>Expected Amount</h2>
    </div>
    <div className='statcard'>
    <div className='colorbox c3'>
    {paidAmount} {currency}
    </div>
    <h2>Paid</h2>
    </div>
    <div className='statcard'>
    <div className='colorbox c4'>
    {expectedAmount - paidAmount} {currency}
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