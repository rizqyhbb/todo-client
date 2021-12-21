import { Link } from 'react-router-dom';

const HomePage = () => {
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
