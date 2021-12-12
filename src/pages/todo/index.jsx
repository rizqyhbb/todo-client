/* eslint-disable no-undef */
import axios from 'axios';
import { Navbar } from '../../components';

const TodoPage = () => {
  const token = window.localStorage.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/task`, config).then((list) => {
    console.log(list);
  });
  return (
    <div className="todo-page container">
      <Navbar />
      <h1>This is Todo APP</h1>
    </div>
  );
};

export default TodoPage;
