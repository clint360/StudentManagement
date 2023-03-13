import React, { useEffect } from 'react'
import './SideBar.css';
import logo from '../Assets/school.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from '../Hooks/Context';
import { FaReceipt } from "@react-icons/all-files/fa/FaReceipt";
import { FaSchool } from "@react-icons/all-files/fa/FaSchool";
import { IoPeople } from "@react-icons/all-files/io5/IoPeople";
import { HiOutlineDocumentReport } from "@react-icons/all-files/hi/HiOutlineDocumentReport"
function SideBar() {
  const { colorTheme } = useContext(MainContext);
  const sideBarStyles = {
    background: colorTheme
  }

  return (
    <div  className='sidebarclass'> 
    <div className='identitydiv' style={sideBarStyles}>
      <div className='imagediv'>
        <img src={logo} alt=''/>
      </div>
      <div className='schoolnamediv'>
        <h2>Masters Bingual College</h2>
      </div>
    </div>
    <div className='navigation'>
      <ul type='none'>
     <Link to='/'> <li><div>📊</div>Dashboard </li></Link>
     <Link to='/classes'><li><FaSchool /> Classes & Fees</li></Link>
     <Link to='/students'><li><IoPeople />  Students</li></Link>
     <Link to='/payments'><li><FaReceipt /> Payments</li></Link>
     <Link to='/reports'><li><HiOutlineDocumentReport/> Payment Reports</li></Link>
      </ul>
    </div>
    </div>
  )
}

export default SideBar