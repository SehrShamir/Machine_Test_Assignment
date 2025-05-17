import React, { useState } from 'react';
import axios from 'axios';

function AddAgentPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', mobile: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/add-agent`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Agent added!");
    } catch (err) {
      alert("Failed to add agent");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {['name', 'email', 'password', 'mobile'].map(field => (
        <input key={field} name={field} placeholder={field} onChange={handleChange} />
      ))}
      <button type="submit">Add Agent</button>
    </form>
  );
}
export default AddAgentPage;
