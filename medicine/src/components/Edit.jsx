import './Edit.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function Edit() {
  const { medId } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      axios.get('http://localhost:8090/medicineapi/medicines/' + medId)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios.put('http://localhost:8090/medicineapi/medicines/' + medId, data)
    .then(res => {
      alert("Medicine edited successfully!");
      navigate('/medicine-list');
    })
    .catch(err => console.log(err));
  }

// Results keys of first object i.e. ['medId', 'drugId', 'brandName',
//  'dosageForm', 'concentration', 'price'].
  return (
    <>
      <div className="w-100 justify-content-center
      align-items-center edit">
        <div className="w-50 border bg-light p-5 form-second-div">
          <h1>Edit Medicine</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Medicine Id">Medicine Id:</label>
              <input type="text" disabled name='Medicine Id' value={data.medId}
               className='form-control'/>
            </div>
            <div>
              <label htmlFor="Drug Id">Drug Id:</label>
              <input type="text" name='Drug Id' value={data.drugId}
               className='form-control' onChange={e => setData({...data, drugId: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="Brand Name">Brand Name:</label>
              <input type="text" name='Brand Name' value={data.brandName}
               className='form-control'onChange={e => setData({...data, brandName: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="Dosage Form">Dosage Form:</label>
              <input type="text" name='Dosage Form' value={data.dosageForm}
               className='form-control' onChange={e => setData({...data, dosageForm: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="Concentration">Concentration:</label>
              <input type="text" name='Concentration' value={data.concentration}
               className='form-control' onChange={e => setData({...data, concentration: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="Price">Price:</label>
              <input type="text" name='Price' value={data.price}
               className='form-control' onChange={e => setData({...data, price: e.target.value})}/>
            </div><br />
            <button className="btn btn-info">Edit</button>
          </form> 
        </div>
      </div>
    </>
  )
}

export default Edit;
