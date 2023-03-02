import React, { useEffect } from 'react'
import './SideBar.css';
import logo from '../Assets/school.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from '../Hooks/Context';


function SideBar() {
  const { colorTheme } = useContext(MainContext);
  const sideBarStyles = {
    background: colorTheme
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
     <Link to='/'> <li>📊 Dashboard </li></Link>
     <Link to='/classes'><li>🏫 Classes & Fees</li></Link>
     <Link to='/students'><li>👥 Students</li></Link>
     <Link to='/payments'><li>💵 Payments</li></Link>
     <Link to='/reports'><li>📑 Payment Reports</li></Link>
      </ul>
    </div>
    </div>
  )
}

export default SideBar