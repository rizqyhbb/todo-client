/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { Input, Button, Navbar } from '../../components';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { ROUTES } from '../../routes';

const RegisterPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reTypePassword, setReTypePassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const register = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      if (password !== reTypePassword) {
        alert('make sure to correctly retype your password');
        setIsLoading(false);
        setPassword('');
        setReTypePassword('');
      } else {
        const data = { email, password, first_name, last_name };
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, data);
        alert('you are registered, you can login now');
        history.push(ROUTES.LOG_IN);
      }
    } catch (err) {
      alert(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!email || !password || !reTypePassword || !first_name || !last_name) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [email, password.reTypePassword, first_name, last_name]);

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
        <Button className="login-page__button btn-link" disabled={isDisabled}>
          {isLoading ? <span className="spinner-border spinner-border-sm "></span> : 'Register'}
        </Button>
        <p>
          Have an account? <Link to="/login">login</Link> here
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
