import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const HomePage = () => {
  // const { isAuth, setIsAuth } = useContext(AuthContext);

  // useEffect(() => {
  //   console.log('Home', isAuth);
  // }, []);
  return (
    <div className="home-page">
      <div className="home-page__title">
        <h1>
          It is just a Todo <span className="fw-bold">App</span>
        </h1>
        <div>
          <button className="">
            <Link to="/login">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
