import React, { useEffect, useState, useRef } from 'react'
import './MedicineList.css'
import axios from 'axios'
import { BrowserRouter, Link, useNavigate } from 'react-router-dom'

function MedicineList() {

  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const columnsRef = useRef(columns);
  const navigate = useNavigate();

  function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    axios.get('http://localhost:8090/medicineapi/medicines')
    .then(res => {
      let updatedColumns = [];
      updatedColumns = Object.keys(res.data[0]);
      updatedColumns = updatedColumns.filter(c => (c !== 'id'));
      console.log(`updatedColumns after filter: ${ updatedColumns }`);
      updatedColumns = updatedColumns.map(c => {
        return capitalizeFirstLetter(c);
      });

      setColumns(updatedColumns);
      // Results keys of first object i.e. ['medId', 'drugId', 'brandName',
      //  'dosageForm', 'concentration', 'price'].

      setRecords(res.data);
    })
  }, []);

  // useEffect(() => {
  //   console.log("columns after capitalize");
  //   console.log(columns);
  //   prevColumnsRef.current = columns; // Sync ref to the new state
  // }, [columns]);

  return (
    <>
      <div className="medicine-list">
        <h1>Medicine List</h1>
        <div className="container mt-5 medicine-list-div">
          <div className="text-end">
            <Link to="/add" className="btn btn-primary">Add +</Link>
          </div>
          <table className="medicine-list-table">
            <thead>
              <tr>
                {columns.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((d, i) => (
                  <tr key={i}>
                    <td>{d.medId}</td>
                    <td>{d.drugId}</td>
                    <td>{d.brandName}</td>
                    <td>{d.dosageForm}</td>
                    <td>{d.concentration}</td>
                    <td>{d.price}</td>
                    <td>
                      <Link to={`/edit/${d.medId}`} className="btn btn-sm btn-success">Edit</Link>
                      <button onClick={e => handleDelete(d.medId)}
                       className="btn btn-sm as-1 btn-danger med-delete-btn">Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  function handleDelete(medId) {
    const confirm = window.confirm("Are you sure you want to delete this medicine?");
    if (confirm) {
      axios.delete(`http://localhost:8090/medicineapi/medicines/${medId}`)
      .then(res => {
        // Update the records state to remove the deleted record
        // setRecords(records.filter(record => record.medId !== medId));
        alert("Medicine deleted successfully!");
        navigate('/medicine-list');
      })
      .catch(err => console.log(err));
    }
  }
}

export default MedicineList;

/* Notes */
/* PUT/DELETE http://localhost:8090/medicineapi/medicines/1 */
/* npm install react-router */
/* npm install react-router-dom */
/* npm install bootstrap */
/* import 'bootstrap/dist/css/bootstrap.min.css'; in main.jsx*/
/* npm install -g json-server */
/* json-server --watch db.json --port 3030 (in another terminal) */
/* npm install axios */
