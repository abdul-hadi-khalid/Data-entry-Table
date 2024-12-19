import React from 'react'
import './Table.css'
import { useSelector } from 'react-redux';

function Table() {
  const formDataList = useSelector((state) => state.form); 
  return (
    <>
      <div className='table-container'>
        <div className='table-box'>
        <h2 className='main-h'>SUBMITTED DATA</h2>
        <div className='heading-tab'>
          <div className='ht'>
            <h2>Name:</h2>
          </div>
          <div className='ht'>
            <h2>E-mail:</h2>
          </div>
          <div className='ht'>
            <h2>Age:</h2>
          </div>
          <div className='ht'>
            <h2>Gender:</h2>
          </div>
          <div className='ht'>
            <h2>Languages:</h2>
          </div>
        </div>
        {formDataList.map((data, index) => (
          <ul className='list-d'>
            <li key={index}>
              <div className='data-flex'>
                <div className='name data'>
                  <p>{data.name}</p>
                </div>
                <div className='email data'>
                  <p>{data.email}</p>
                </div>
                <div className='age data'>
                  <p>{data.age}</p>
                </div>
                <div className='gender data'>
                  <p>{data.gender}</p>
                </div>
                <div className='languages data'>
                  <p>{data.languages.join(', ')}</p>
                </div>
              </div>
              </li>
          </ul>
        ))}
        </div>
      </div>
    </>
  )
}

export default Table
