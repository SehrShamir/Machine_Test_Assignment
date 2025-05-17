import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
  const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
  console.log('Login response:', res.data);

  if (res.data.token) {
    localStorage.setItem('token', res.data.token);
    window.location.href = '/dashboard';
  } else {
    setError('Login failed: token not received');
  }
} catch (err) {
  setError('Login failed. Please check your credentials.');
}

  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ display: 'block', width: '100%', marginBottom: '10px' }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ display: 'block', width: '100%', marginBottom: '10px' }}
      />

      <button type="submit" style={{ width: '100%' }}>Login</button>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </form>
  );
}

export default LoginPage;
