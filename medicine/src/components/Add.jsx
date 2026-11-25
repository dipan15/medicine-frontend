import './Add.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {
  const [inputData, setInputData] = useState({medId: '',
     drugId: '', brandName: '', dosageForm: '', concentration: '',
    price: ''});
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8090/medicineapi/medicines', inputData)
    .then(res => {
      alert("Medicine added successfully!");
      navigate('/medicine-list');
    })
    .catch(err => console.log(err));
  }

// Results keys of first object i.e. ['medId', 'drugId', 'brandName',
//  'dosageForm', 'concentration', 'price'].
  return (
    <>
      <div className="w-100 justify-content-center
      align-items-center add">
        <div className="w-50 border bg-light p-5 form-second-div">
          <h1>Add Medicine</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Medicine Id">Medicine Id:</label>
              <input type="text" name='Medicine Id' className='form-control'
              onChange={e => setInputData({...inputData, medId: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="Drug Id">Drug Id:</label>
              <input type="text" name='Drug Id' className='form-control'
              onChange={e => setInputData({...inputData, drugId: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="Brand Name">Brand Name:</label>
              <input type="text" name='Brand Name' className='form-control'
              onChange={e => setInputData({...inputData, brandName: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="Dosage Form">Dosage Form:</label>
              <input type="text" name='Dosage Form' className='form-control'
              onChange={e => setInputData({...inputData, dosageForm: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="Concentration">Concentration:</label>
              <input type="text" name='Concentration' className='form-control'
              onChange={e => setInputData({...inputData, concentration: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="Price">Price:</label>
              <input type="text" name='Price' className='form-control'
              onChange={e => setInputData({...inputData, price: e.target.value})}/>
            </div><br />
            <button className="btn btn-info">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Add;
