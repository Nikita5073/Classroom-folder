import React,{useState, useEffect} from 'react'
import axios from 'axios'

const StudentList = () => {
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
              const response = await axios.get(`http://localhost:5000/student`, {headers:{'Authorization': `Bearer ${token}`}})
              console.log(`>>>>>>>>response>>>>`,response.data, token);
              setData(response.data)
              if(response.status === 200)
              {
                  alert('GetAll users Sucessfully')
              }
            } catch(error){
              console.log("error in fetching", error)
            }
          };
          const singleData = async(id) => {
            const token = localStorage.getItem('token');
            try{
            console.log('>>>>>id>>>>', id);
            const response = await axios.get(`http://localhost:5000/student/${id}`,{headers:{'Authorization': `Bearer ${token}`}})
            console.log('>>>>>singleData>>>>', response.data, token);
        
            setView(response.data)
            setModelView(true)
            } catch(error){
              console.log("error in fetching", error)
            }
          };
          const modelCLose = () => {
            setModelView(false)
          };
          const deleteInfo = async(id) => {
            const token = localStorage.getItem('token');
            try{
            console.log('>>>>id>>>>>', id);
            const response = await axios.delete(`http://localhost:5000/student/${id}`, {headers:{'Authorization': `Bearer ${token}`}})
            console.log('>>>>>deleteData>>>>', response.data, token);
            setDeleteData(response.data)
            } catch(error){
              console.log("error in fetching", error)
            }
            fetch()

          };

    

  return (
    <div>
    <h1 style={{textAlign:'center'}}>StudentList</h1>
    <div className="class-list-container">
        {(
            data.map((item, index) => (
                <div key={index} style={{border:'1px solid black', margin:'10px', padding:'10px'}} className="class-card">
                <p>StudentName: {item.StudentName}</p>
                <p>Email: {item.Email}</p>
                <p>PhoneNumber: {item.PhoneNumber}</p>
                <p>Address: {item.Address}</p>
                <p>Qualification: {item.Qualification}</p>
                <p>BatchName: {item.BatchName}</p>
                <p>JoiningDate: {item.JoiningDate}</p>
                <p>RollNo: {item.RollNo}</p>
                <p>Gender: {item.Gender}</p>
                <p>Fees: {item.Fees}</p>
                <div className="button-group">
                <button className="view-button" onClick={() => singleData(item._id)}>View Details</button>
                <button className="delete-button" onClick={() => deleteInfo(item._id)}>Delete</button>
            </div>
                </div>
            ))
        )}
    </div>

    {modelView && view && (
      <div style={modalStyles.overlay}>
        <div style={modalStyles.modal}>
                <p>StudentName: {view.StudentName}</p>
                <p>Email: {view.Email}</p>
                <p>PhoneNumber: {view.PhoneNumber}</p>
                <p>Address: {view.Address}</p>
                <p>Qualification: {view.Qualification}</p>
                <p>BatchName: {view.BatchName}</p>
                <p>JoiningDate: {view.JoiningDate}</p>
                <p>RollNo: {view.RollNo}</p>
                <p>Gender: {view.Gender}</p>
                <p>Fees: {view.Fees}</p>
              <button onClick={modelCLose}>Close</button>
        </div>
        </div>
      )}
    </div>
  )
}

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


export default StudentList