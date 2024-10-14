import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Listclass.css'
const Listclass = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState([]);
  const [DeleteData, setDeleteData] = useState([]);
  const [modelView, setModelView] = useState(false)
  
  useEffect(()=>{
    fetch()
    },[]);
    
    const fetch  = async() => {
        const token = localStorage.getItem('token');
        try{
        const response = await axios.get(`http://localhost:5000/batch`,{headers:{'Authorization': `Bearer ${token}`}})
        console.log(`>>>>>>>>response>>>>`,response.data, token);
        setData(response.data)
        if(response.status === 200)
        { 
            alert('GetAll users Sucessfully')
        }
      } catch(error) {
        console.log("err in fetching", error)
      }
    };
  const singleData = async(id) => {
    console.log('>>>>>id>>>>', id);
    const token = localStorage.getItem('token');
    try{
    const response = await axios.get(`http://localhost:5000/batch/${id}`,{headers:{'Authorization': `Bearer ${token}`}})
    console.log('>>>>>singleData>>>>', response.data, token);

    setView(response.data)
    setModelView(true)
    } catch(error){
      console.log("error in fetching", error)
    }
  };

  const modelCLose = () => {
    setModelView(false)
  }

  const deleteInfo = async(id) => {
    console.log('>>>>id>>>>>', id);
    const token = localStorage.getItem('token');
    try{
    const response = await axios.delete(`http://localhost:5000/batch/${id}`,{headers:{'Authorization': `Bearer ${token}`}})
    console.log('>>>>>deleteData>>>>', response.data, token);
    setDeleteData(response.data)
    fetch()
    } catch(error){
      console.log("error in fetching", error)
    }
  };
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Class List</h1>
      <div className="class-list-container">
        {(
            data.map((item, index) => (
                <div key={index}  style={{border:"1px solid black", margin: "10px", padding:"10px"}} className="class-card"> 
                <p>BatchName: {item.BatchName}</p>
                <p>Subject: {item.Subject}</p>
                <p>Timings: {item.Timings}</p>
                <p>Fees: {item.Fees}</p>
                <p>WeekOff: {item.WeekOff}</p>
                <p>NoOfSeats: {item.NoOfSeats}</p>
                <div className="button-group">
                <button className="view-button" onClick={() =>singleData(item._id)}>View Details</button>
                <button className="delete-button" onClick={() =>deleteInfo(item._id)}>Delete</button>
                </div>
                </div>
            ))
        )}
      </div>
      {modelView && view && (
        <div style={modalStyles.overlay}>
        <div style={modalStyles.modal}>
        <p>BatchName: {view.BatchName}</p>
                <p>Subject: {view.Subject}</p>
                <p>Timings: {view.Timings}</p>
                <p>Fees: {view.Fees}</p>
                <p>WeekOff: {view.WeekOff}</p>
                <p>NoOfSeats: {view.NoOfSeats}</p>
              <button onClick={modelCLose}>Close</button>
        </div>
        </div>
      )}


  </div>
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '400px',
  },
};


export default Listclass;
