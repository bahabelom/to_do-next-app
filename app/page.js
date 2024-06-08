"use client"

import axios from 'axios';
import Todo from '../components/todo';  // Assuming Navbar.jsx is in the components folder
import { useEffect, useState } from "react";

export default function Home() {

  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
   
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api'); // Adjust URL if needed
        console.log(response);
        const { todos } = response.data;
        setTodos(todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
        // Handle error in UI (optional: display an error message)
      }
    };

    fetchTodos();
  }, []); // Empty dependency array ensures fetching only once on component mount


  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };
  const addTodo = async (e) => {
    e.preventDefault();
    try {

      // api code 

      const response = await axios.post('/api', {
        title: newTitle,
        description: newDescription,
      });

      const data = response.data;

      if (data.message === 'Todo created successfully') {
        setNewTitle('');
        setNewDescription('');
        // Update UI to reflect the new todo (example using a toast notification)
        alert('Todo added successfully!');
      } else {
        console.error('Error creating todo:', data.message);
        alert('Error creating todo: ' + data.message); // More specific error message
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Error creating todo. Please try again.');
    }
  };



  const deleteTodo = async (id) => {
    try {

      const response = await axios.delete('/api', {
        mongoId: id,
      });
      const data = response.data;

      console.log(data);

  
  } catch (error) {
      // console.error('Error deleting todo:', error);
  }
   
  };
  return (

    <div className="new-todo-container flex  justify-center items-center h-screen">


      <form className="bg-white shadow-md rounded-lg p-8  w-1/3 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-center mb-4">Add New Todo</h2>
        <input
          type="text"
          placeholder="Enter title..."
          value={newTitle}
          onChange={handleTitleChange}
          className="todo-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <textarea
          placeholder="Add description (optional)"
          value={newDescription}
          onChange={handleDescriptionChange}
          className="todo-input w-full h-24 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
        />
        <button onClick={addTodo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            { todos.map((item, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
