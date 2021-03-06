import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { Button } from './button';

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const history = useHistory();
  const [navBrand, setNavBrand] = useState('');
  const [logout, setlogout] = useState('');
  const [disabled, setIsDisabled] = useState(true);
  const storedData = window.localStorage;

  useEffect(() => {
    if (!storedData.token) {
      setNavBrand(' App');
      setlogout(null);
      setIsDisabled(true);
    } else {
      setNavBrand(` ${storedData.first_name} ${storedData.last_name}`);
      setlogout('Logout');
      setIsDisabled(false);
    }
  }, [storedData.token]);

  const signout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    setIsAuth(false);
    history.push('/');
  };

  return (
    <nav className="d-flex justify-content-between">
      <div className="row">
        {!storedData.token ? (
          <h1 className="mt-5">
            Todo<span className="fw-bold">{navBrand}</span>
          </h1>
        ) : (
          <h1 className="mt-5">
            Hello<span className="fw-bold">{navBrand}</span>
          </h1>
        )}
      </div>
      <div className="mt-5">
        <h2>
          <Button className="login-page__button" disabled={disabled} onClick={signout}>
            {logout}
          </Button>
        </h2>
      </div>
    </nav>
  );
};
