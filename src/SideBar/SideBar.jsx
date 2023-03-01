import React from 'react'
import './SideBar.css';
import logo from '../Assets/logo192.svg'

function SideBar() {
  const sideBarStyles = {
    background: 'green'
  }

  return (
    <div style = {sideBarStyles} className='sidebarclass'> 
    <div className='identitydiv'>
      <div className='imagediv'>
        <img src={logo} alt=''/>
      </div>
      <div className='schoolnamediv'>
        <h2>Masters Bingual College</h2>
      </div>
    </div>
    <div className='navigation'>
      <ul type='none'>
      <li>Dashboard</li>
      <li>Classes & Fees</li>
      <li>Students</li>
      <li>Payments</li>
      <li>Payment Reports</li>
      </ul>
    </div>
   <div className='copyright'> <b>@clint360</b> +237680612360</div>
    </div>
  )
}

export default SideBar