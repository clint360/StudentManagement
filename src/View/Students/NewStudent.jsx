import React, { useContext } from 'react';
import { MainContext } from '../../Hooks/Context';
import './NewStudent.css'

function NewStudent() {
  const { classes } = useContext(MainContext)

  return (
    <div className='newstudent'>
         <div className='opner'>New Student Information Entry</div>
         
         <div className='photoarea'>
          <div className='uploadimage'>
            Upload Student Photo:
            <input type='file' accept='image/*' />
            <button type='button'> Upload </button>
          </div>
          <div className='imageContainer'>
           <img src='' alt='Image' />
          </div>
         </div>
         <div className='studentinformation'>
         Student Name: 
          <input type='text' required /><br />
         Sex: 
          <input type='text' required maxLength={1}/>
          <br />
         Class: 
          <select> 
            {classes.map((item, index)=>{return(
            <option value={item.fees}>
            {item.name}
            </option>
            )})
            }
          </select>
          <br />
          Date of Birth: 
          <input type='date' required />
          <br />
          Place of Birth: 
          <input type='text' required />
          <br />
          Parent/Guardian: 
          <input type='text' />
          <br />
          Address: 
          <input type='text' />
          <br />
          Phone: 
          <input type='number' />
          <br />
          Email: 
          <input type='email' />
          <br />
          </div>
    </div>
  )
}

export default NewStudent