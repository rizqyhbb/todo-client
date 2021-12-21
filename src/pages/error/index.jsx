import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

const Error = () => {
  return (
    <div className="container error-page">
      <h1>
        404 <span className="fw-bold">Not Found</span>
      </h1>
      <p>Looks like the page that you are looking for is not exist</p>
      <Link to={ROUTES.ROOT}>Back to home</Link>
    </div>
  );
};

export default Error;
