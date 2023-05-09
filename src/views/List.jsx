import React from 'react'
import { Link } from 'react-router-dom';


export default function List() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
//set stuff if for changing lists
  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos([todos.slice(0, index), todos.slice(index + 1)]);
  };

  return (
    <div>
    <h1>TO DO LIST!</h1>
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAddTodo}>Add To List</button>
    </div>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => handleDeleteTodo(index)}>Remove From List</button>
        </li>
      ))}
    </ul>
  </div>
  )
};
