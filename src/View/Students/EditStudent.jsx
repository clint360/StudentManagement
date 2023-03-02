import React, { useContext, useEffect, useRef, useState } from 'react';
import { MainContext } from '../../Hooks/Context';
import './NewStudent.css';
import Select from 'react-select';

function EditStudent({close}) {
    const { classes, setStudents, students, currentStudentIndex,   setCurrentStudentIndex } = useContext(MainContext);
    const [ sclass, setSclass] = useState(null);
    const [image, setImage ] = useState('');
    const [sTF, setSTF] = useState(0);
    const studentnameRef = useRef(null);
    const [adNumber, setAdnumber ] = useState(null)
    const sexRef = useRef(null);
    const dobRef = useRef(null);
    const pobRef = useRef(null);
    const pgRef = useRef(null);
    const addressRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const options = [...classes.map((item, index)=> {return(
      {value: item.fees, label: item.name }
    )})]
  
    useEffect(()=>{
      setAdnumber(students[currentStudentIndex].adno)
      studentnameRef.current.value = students[currentStudentIndex].name;
      sexRef.current.value = students[currentStudentIndex].sex;
      pgRef.current.value = students[currentStudentIndex].guardianName;
      phoneRef.current.value = students[currentStudentIndex].phone;
      emailRef.current.value = students[currentStudentIndex].email;
     pobRef.current.value = students[currentStudentIndex].POB;
     dobRef.current.value = students[currentStudentIndex].DOB;
     addressRef.current.value = students[currentStudentIndex].Address
    },[currentStudentIndex])
  
       function addStudent(e) {
        e.preventDefault();
        let studentname = studentnameRef.current.value;
        let sex = sexRef.current.value;
        let dob = dobRef.current.value;
        let pob = pobRef.current.value;
        let pg = pgRef.current.value;
        let address = addressRef.current.value;
        let phone = phoneRef.current.value;
        let email = emailRef.current.value;
        students[currentStudentIndex] = {
          name: studentname.toUpperCase(),
          adno: adNumber,
          sex: sex.toUpperCase(),
          class: sclass,
          profilePicture: image,
          guardianName: pg.toUpperCase(),
          phone: phone,
          email: email,
          DOB: dob,
          POB: pob,
          Address: address,
          payableFee: sTF,
          paidFee: 0,
          balance: ()=>{return ( this.payableFee  - this.paidFee )}
        }
        setStudents(students);
      }
  
    const handleClassChange = (selectedOption) => {
      setSclass(selectedOption.label);
      setSTF(0);
      let value=selectedOption.value
      for(let i = 0; i < value.length; i++) {
        setSTF((prev)=>prev + value[i].val);
      }
      console.log(sTF)
      console.log(sclass)
    }
  
    return (
      <div className='newstudent'>
        <form onSubmit={addStudent}>
           <div className='opner'>Edit Student Information</div>
           
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
            <input type='text' ref={studentnameRef} required /><br />
           Sex: 
            <input type='text' ref={sexRef} required maxLength={1}/>
            <br />
           Class: 
            <Select options={options} 
             onChange={handleClassChange}
             defaultValue={{value: '0', label: 'Select'}}
            />
            <br />
            Date of Birth: 
            <input type='date' ref={dobRef} required />
            <br />
            Place of Birth: 
            <input type='text' ref={pobRef}  required />
            <br />
            Parent/Guardian: 
            <input type='text' ref={pgRef} />
            <br />
            Address: 
            <input type='text' ref={addressRef} />
            <br />
            Phone: 
            <input type='number' ref={phoneRef} />
            <br />
            Email: 
            <input type='email' ref={emailRef} />
            <br />
            </div>
            <button className='save' type='submit'>
              Save
            </button>
            <button className='cancel' onClick={close}>
              Cancel
            </button>
       </form>
      </div>
    )
}

export default EditStudent