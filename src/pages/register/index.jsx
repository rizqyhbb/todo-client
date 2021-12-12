/* eslint-disable no-undef */
import { useState } from 'react';
import { Input, Button, Navbar } from '../../components';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reTypePassword, setReTypePassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  const register = () => {
    const data = { email, password, first_name, last_name };
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, data).then((response) => {
      console.log(response);
    });

    history.push('/');
  };

  return (
    <div className="login-page container">
      <Navbar />
      <form onSubmit={register} className="login-page__form">
        <Input
          className="login-page__input col-xl-4 col-10"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <Input
          className="login-page__input col-xl-4 col-10"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <Input
          className="login-page__input col-xl-4 col-10"
          placeholder="Re-type password"
          type="password"
          value={reTypePassword}
          onChange={(value) => setReTypePassword(value)}
        />
        <Input
          className="login-page__input col-xl-4 col-10"
          placeholder="First name"
          type="text"
          value={first_name}
          onChange={(value) => setFirstName(value)}
        />
        <Input
          className="login-page__input col-xl-4 col-10"
          placeholder="Last name"
          type="text"
          value={last_name}
          onChange={(value) => setLastName(value)}
        />
        <Button className="login-page__button btn-link" onClick={register}>
          Register
        </Button>
        <p>
          Have an account? <Link to="/login">login</Link> here
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
