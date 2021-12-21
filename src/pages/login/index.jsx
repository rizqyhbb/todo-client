/* eslint-disable no-undef */
import { Input, Button, Navbar } from '../../components';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { AuthContext } from '../../context/authContext';

const LoginPage = () => {
  const { setIsAuth } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    const user = { email, password };
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, user).then((response) => {
      let storedData = (key, value) => {
        window.localStorage.setItem(key, value);
      };
      storedData('token', response.data.token);
      storedData('email', response.data.decode.email);
      storedData('first_name', response.data.decode.first_name);
      storedData('last_name', response.data.decode.last_name);
      storedData('isAuth', true);
      setIsAuth(window.localStorage.getItem('isAuth'));
      history.push(ROUTES.APP_TODO);
    });
  };

  return (
    <div className="login-page container">
      <Navbar />
      <form onSubmit={login} className="login-page__form col">
        <Input
          className="login-page__input col-xl-4 col-10"
          placeholder="Email"
          value={email}
          onChange={(value) => setEmail(value)}
          type="text"
        />
        <Input
          className="login-page__input col-xl-4 col-10"
          placeholder="Password"
          value={password}
          onChange={(value) => setPassword(value)}
          type="password"
        />
        <Button className="login-page__button btn-link">Login</Button>
        <p>
          Or you can <Link to="/register">register</Link> here
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
