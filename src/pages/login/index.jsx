import { Input, Button } from '../../components';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-page container">
      <div className="row">
        <h1 className="offset-1">
          Todo<span className="fw-bold">App</span>
        </h1>
      </div>
      <form className="login-page__form">
        <Input
          className="login-page__input"
          placeholder="Email"
          value={email}
          onChange={(value) => setEmail(value)}
          type="text"
        />
        <Input
          className="login-page__input"
          placeholder="Password"
          value={password}
          onChange={(value) => setPassword(value)}
          type="password"
        />
        <Button className="login-page__button btn-link">Login</Button>
        <Button className="login-page__button btn-link">Register</Button>
      </form>
    </div>
  );
};

export default LoginPage;
