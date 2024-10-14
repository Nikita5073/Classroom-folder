import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addclass.css'

const Addclass = () => {
    const [formData, setFormData] = useState({
        BatchName: '',
        Subject: '',
        Timings: '',
        Fees: '',
        WeekOff: [],
        NoOfSeats: '',
    });

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const token = localStorage.getItem('token');
        try{
        const res = await axios.post("http://localhost:5000/batch", formData, {headers:{'Authorization': `Bearer ${token}`}});
        console.log('>>>>>res>>>>', res,token);
        if (res.status === 200) {
            alert('class successfully create')
        }

        navigate('/list-class')
    } catch(error){
        console.log("err in fetching", error)
    }
    };

    return (
        <div className="add-class-container">
            <h2>Add Class</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Batch Name:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.BatchName}
                                    onChange={(e) => setFormData({ ...formData, BatchName: e.target.value })}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Subject:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.Subject}
                                    onChange={(e) => setFormData({ ...formData, Subject: e.target.value })}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Timings:</label></td>
                            <td>
                                <input
                                    type="time"
                                    name="timings"
                                    value={formData.Timings}
                                    onChange={(e) => setFormData({ ...formData, Timings: e.target.value })}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Fees:</label></td>
                            <td>
                                <input
                                    type="number"
                                    name="fees"
                                    value={formData.Fees}
                                    onChange={(e) => setFormData({ ...formData, Fees: e.target.value })}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Week Off:</label></td>
                            <td>
                                <input
                                    type="text" // Change to text instead of JSON, assuming you meant to input a week-off day
                                    name="weekoff"
                                    value={formData.WeekOff}
                                    onChange={(e) => setFormData({ ...formData, WeekOff: e.target.value })}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>No Of Seats:</label></td>
                            <td>
                                <input
                                    type="number"
                                    name="noOfseats"
                                    value={formData.NoOfSeats}
                                    onChange={(e) => setFormData({ ...formData, NoOfSeats: e.target.value })}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>

    );
};

export default Addclass;
