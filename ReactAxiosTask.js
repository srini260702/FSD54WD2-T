




React Axios Task 


App.Jsx :

// src/App.js

import React from 'react';
import UserManager from './UserManager';


function App() {
  return (
    <div className="App" style={{backgroundColor:'white', color:'black',padding:'50px', marginLeft:'300px'}}>
      <div style={{textAlign:'center', marginBottom:'40px',  padding:'60px',}}>
      <h1>React CRUD App</h1>
      </div>
      <UserManager />
    </div>
  );
}

export default App;

UserManager.Jsx :

// src/UserManager.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManager = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // Fetch existing users from the API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddUser = () => {
    // Add a new user to the API
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        setUsers([...users, response.data]);
        setNewUser({ name: '', email: '', phone: '' });
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  const handleEditUser = () => {
    // Edit an existing user in the API
    if (!editingUser) return;

    axios.put(`https://jsonplaceholder.typicode.com/users/${editingUser.id}`, editingUser)
      .then(response => {
        const updatedUsers = users.map(user => (user.id === editingUser.id ? response.data : user));
        setUsers(updatedUsers);
        setEditingUser(null);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  const handleDeleteUser = (id) => {
    // Delete an existing user from the API
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const startEditUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div>
        <div style={{textAlign:'center', padding:'20px'}}>
        <h2>User Manager</h2>
        </div>
      
      <ul >
        {users.map(user => (
          <li key={user.id} style={{padding:'10px'}}>
            {user.name} - {user.email} - {user.phone}
            <button onClick={() => startEditUser(user)} style={{margin:'10px'}}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        {editingUser ? (
          <>
            <h3>Edit User</h3>
            <input type="text" placeholder="Name" value={editingUser.name} onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })} />
            <input type="text" placeholder="Email" value={editingUser.email} onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} />
            <input type="text" placeholder="Phone" value={editingUser.phone} onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })} />
            <button onClick={handleEditUser}>Save</button>
            <button onClick={() => setEditingUser(null)}>Cancel</button>
          </>
        ) : (
          <>
            <h3 style={{textAlign:'center', padding:'20px'}}>Add User</h3>
            <div style={{marginLeft:'60px'}}>
            <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
            <input type="text" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
            <input type="text" placeholder="Phone" value={newUser.phone} onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />
            <button onClick={handleAddUser} style={{margin:'20px'}}>Add User</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserManager;
