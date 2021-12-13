/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Navbar, Input, Button } from '../../components';

const TodoPage = () => {
  const [todoList, setTodoList] = useState([]);
  const token = window.localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const data = async () => {
    const todo = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/task`, config);
    return setTodoList(todo.data);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="todo-page container">
      <Navbar />
      <form className="todo-page__form">
        <Input className="todo-page__input" placeholder="Write some task here" />
        <Button>Add</Button>
      </form>
      <div className="todo-page__todolist">
        <h1>
          Todo <span className="fw-bold">List</span>
        </h1>
        {todoList.map((data) => (
          <Card key={data.id_task}>{data.todo}</Card>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
