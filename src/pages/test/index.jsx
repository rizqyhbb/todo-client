import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';

const Root = () => {
  const users = () => {
    axios.get('http://localhost:3001/api/users').then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <Navbar />
      <p>This is for show all user</p>
      <button onClick={users}>All Users</button>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Root;
