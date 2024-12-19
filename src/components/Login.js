import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { submitForm } from '../redux/Store'
import './Login.css'

function Login({onClose}) {
  const [formData,setFormData]=useState({
    name:'',
    email: '',
    age: '',
    gender :'',
    languages: [],
  });

  const[error,setErrror]=useState()

  const dispatch =useDispatch();

  const handleChange=(e)=>{
    const{name,type,value,checked}=e.target;
    if(type==='checkbox')
    {
      setFormData((prev)=>({
        ...prev,
        languages:checked
        ?[...prev.languages,value]
        :prev.languages.filter((lang)=>lang!==value)
      }));
    }
    else
    {
      setFormData({...formData,[name]:value});
    }
  }

  const handleSubmit= (e)=>{
    e.preventDefault();
    const{name,email,age,gender,languages}=formData;
    if(!name||!email||!age||!gender||!languages.length)
    {
      setErrror('*Plaese fill in all the above fields');
      return;
    }
    dispatch(submitForm(formData));
    console.log("Form submitted : ",formData);
    setFormData({name:'',age:'',email:'',gender:'',languages:[]});
    setErrror('');
    onClose();
  }

  return (
    <div>
      <div className='login-page' onClick={onClose}>
        <div className='login-form' onClick={(e)=>e.stopPropagation()}>
          <div className='close-btn' onClick={onClose}>
          <button><i class="fa-solid fa-xmark"></i></button>
          </div>
          <h2>Login Form:</h2>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <div className='name inp'>
              <label>
                Name:
                <br/>
                <input type="text" name='name' value={formData.name} onChange={handleChange} />
              </label>
              </div>
              <br/>
              <div className='email inp'>
              <label>
                E-mail:
                <br/>
                <input type="email" name='email' value={formData.email} onChange={handleChange} />
              </label>
              </div>
              <br/>
              <div className='age inp'>
              <label>
                Age:
                <br/>
                <input type="number" name='age' value={formData.age} onChange={handleChange} />
              </label>
              </div>
              <br/>
              <div className='gender'>
              <label>
                Gender:
                <br/>
                <select name='gender' value={formData.gender} onChange={handleChange}>
                  <option>Select:</option>
                  <option value="male" >Male</option>
                  <option value="female" >Female</option>
                  <option value="other" >Other</option>
                </select>
              </label>
              </div>
              <br/>
              <div className='lang'>
              <fieldset>
                <legend>Select Languages :</legend>
                <div className='lang-opt'>
                <label>
                  <input type="checkbox" name='languages' value='English' onChange={handleChange} />
                  &ensp;&ensp;English
                </label>
                <label>
                  <input type="checkbox" name='languages' value='Urdu' onChange={handleChange}/>
                  &ensp;&ensp;Urdu
                </label>
                <label>
                  <input type="checkbox" name='languages' value='French' onChange={handleChange}/>
                  &ensp;&ensp;French
                </label>
                </div>
              </fieldset>
              </div>
              <br/>
              {error && <p className='error-msg'>{error}</p>}
              <button type='submit' className='submit-button'>Submit</button>
            </form>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
