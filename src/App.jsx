/*
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';*/
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [account, setAccount] = useState({
    username: 'example@test.com',
    password: 'example',
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    /*console.log(account);
    console.log(import.meta.env.VITE_BASE_URL);
    console.log(import.meta.env.VITE_API_PATH);*/
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/v2/admin/signin`, account)
      .then((res) => console.log(res))
      .catch((error) => alert('登入失敗'));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-5">請先登入</h1>
      <form className="d-flex flex-column gap-3" onSubmit={handleLogin}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="username"
            name="username"
            placeholder="name@example.com"
            value={account.username}
            onChange={handleInputChange}
          />
          <label htmlFor="username">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={account.password}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn btn-primary">登入</button>
      </form>
      <p className="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
    </div>
  );
}

export default App;
