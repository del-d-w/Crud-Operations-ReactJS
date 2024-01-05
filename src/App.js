import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import TableData from './TableData';

const App = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    salary: '',
    dob: '',
    city: '',
    address: '',
  });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      salary: '',
      dob: '',
      city: '',
      address: '',
    });
    setEditId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addData = () => {
    if (editId !== null) {
      // Edit existing data
      const updatedData = data.map((item) =>
        item.id === editId ? { ...item, ...formData } : item
      );
      setData(updatedData);
      localStorage.setItem('data', JSON.stringify(updatedData));
    } else {
      // Add new data
      const newData = [...data, { id: Date.now(), ...formData }];
      setData(newData);
      localStorage.setItem('data', JSON.stringify(newData));
    }
    closeModal();
  };

  const editData = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setEditId(id);
    setFormData(itemToEdit);
    openModal();
  };

  const deleteData = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  };

  const handleGenderChange = (id, newGender) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, gender: newGender } : item
    );
    setData(updatedData);
    localStorage.setItem('data', JSON.stringify(updatedData));
  };
  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data')) || [];
    setData(storedData);
  }, []);

  return (
    <div>
      <h1 style={{fontSize:35,margin:20}}>Employees Data</h1>
      <div style={{textAlign:'right'}}>
      <button onClick={openModal} style={{margin:30,marginRight:80}} className='btn btn-primary'>
        Add Employee
        </button>
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
          {editId !== null ? 'Edit Employee' : 'Add Employee'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <label htmlFor="firstName" className='mb-3'>First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className='w-100 mb-3'
            />
          </div>

          <div>
            <label htmlFor="lastName" className='mb-3'>Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className='w-100 mb-3'
            />
          </div>
          <div className="mb-3">
          <label className='mb-3'>Gender:</label>
          <div>
            <label htmlFor="male">
              <input className='mb-3'
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
              />
              Male
            </label>
            <label htmlFor="female" className="mr-3">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
              />
              Female
            </label>
            <label htmlFor="others">
              <input
                type="radio"
                id="others"
                name="gender"
                value="others"
                checked={formData.gender === 'others'}
                onChange={handleInputChange}
              />
              Others
            </label>
          </div>

          <div>
            <label htmlFor="email" className='mb-3'>Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className='w-100 mb-3'
            />
          </div>

          <div>
            <label htmlFor="salary" className='mb-3'>Salary:</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              placeholder="Salary"
              className='w-100 mb-3'
            />
          </div>

          <div>
            <label htmlFor="dob" className='mb-3'>Date Of Birth:</label>
            <input
              type="number"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              placeholder="Date Of Birth"
              className='w-100 mb-3'
            />
          </div>

          <div>
            <label htmlFor="city" className='mb-3'>City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className='w-100 mb-3'
            />
          </div>

          <div>
            <label htmlFor="address" className='mb-3'>Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className='w-100 mb-3'
            />
          </div>

        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={addData}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <TableData employeeData={data} editData={editData} deleteData={deleteData} 
      handleGenderChange={handleGenderChange}/>
    </div>
  );
};

export default App;
