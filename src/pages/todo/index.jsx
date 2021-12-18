/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Navbar, Input, Button, Modal } from '../../components';

const TodoPage = () => {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState('');
  const [incompleteTask, setIncompleteTask] = useState([]);
  const [completeTask, setCompleteTask] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const token = window.localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const data = async () => {
    const todo = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/task`, config);
    setTodoList(todo.data);
  };
  const deleteAction = async (id) => {
    const deleteTask = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/task/${id}`,
      config
    );
    data();
    return console.log(deleteTask);
  };

  const addAction = async (e) => {
    e.preventDefault();
    const newTodo = { todo: task };
    const addTask = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/task`, newTodo, config);
    data();
    setTask('');
    return console.log(addTask);
  };

  const updateAction = async (status, id_task) => {
    // console.log(e.target.value);
    // const value = e.target.value;
    const payload = { complete: status };
    console.log('PAYLOAD', payload);
    const updateTask = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/task/${id_task}`,
      payload,
      config
    );
    data();
    return console.log(updateTask);
  };

  useEffect(() => {
    data();
  }, []);

  useEffect(() => {
    setIncompleteTask(todoList.filter((data) => data.complete === false));
    setCompleteTask(todoList.filter((data) => data.complete === true));
  }, [todoList]);

  return (
    <div className="todo-page container">
      <Navbar />
      <div className="col">
        <form onSubmit={addAction} className="todo-page__form">
          <Input
            className="todo-page__input"
            placeholder="Write some task here"
            value={task}
            onChange={(value) => setTask(value)}
          />
          <Button className="ms-3">Add</Button>
        </form>
      </div>
      <div className="row todo-page__todolist">
        <div className="col-6 mt-3">
          <h1>
            Todo <span className="fw-bold">List</span>
          </h1>
          {incompleteTask.length > 0 ? (
            incompleteTask.map((data) => (
              <Card
                onDelete={() => deleteAction(data.id_task)}
                key={data.id_task}
                defaultChecked={data.complete}
                onChange={() => updateAction(true, data.id_task)}>
                {data.todo}
              </Card>
            ))
          ) : (
            <p>There are no Todo</p>
          )}
        </div>
      </div>
      <div className="row todo-page__todolist">
        <div className="col-6 mt-3">
          <h1>
            Complete <span className="fw-bold">List</span>
          </h1>
          {completeTask.length > 0 ? (
            completeTask.map((data) => (
              <Card
                className="text-decoration-line-through"
                onDelete={() => deleteAction(data.id_task)}
                key={data.id_task}
                defaultChecked={data.complete}
                onChange={() => updateAction(false, data.id_task)}>
                {data.todo}
              </Card>
            ))
          ) : (
            <p>There are no complete task</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
