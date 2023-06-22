import React from 'react';
import './StatCard.css';
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { Link } from 'react-router-dom';

function StatCard({value, attribute, bg, link, icon}) {
  return (
    <div className='statCard' style={{background: bg }}>
      <div className="iconsection">
       {icon}
      </div>
      <div className="actualinfo">
       <h2>{value}</h2>
       <p>{attribute}</p>
      </div>
      <div className="options">
     <Link to={`/${link}`}><FaAngleRight/></Link> 
      </div>
    </div>
  )
}

export default StatCard
