import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__title">
        <h1>
          It is just a Todo <span className="fw-bold">App</span>
        </h1>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default HomePage;
