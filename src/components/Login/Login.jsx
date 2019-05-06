import React, { useState } from 'react';
import Input from '../common/Input';
import { login } from '../../services/userService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    const isAuthenticated = await login(email, password);
    if (isAuthenticated) {
      window.location.reload();
    } else {
      setError('invalid email or password');
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <Input label="Email" name="loginEmail" value={email} handleChange={({ target }) => setEmail(target.value)} />
        <Input
          type="password"
          label="Password"
          name="loginPassword"
          value={password}
          handleChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit" className="btn btn-primary btn">
          Login
        </button>
        <p className="mt-3" style={{ color: 'red' }}>
          {error}
        </p>
      </form>
    </div>
  );
}

export default Login;
