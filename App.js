import React, { useState } from 'react';
import Inputfield from './Components/Inputfield';
import Box from './Components/Box';

function App() {
  const [todos, setTodos] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('none'); // Added sorting state

  const addToDoHandler = (item) => {
    setTodos([
      ...todos,
      {
        item,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };

  const sortTodos = (criteria) => {
    let sortedTodos = [...todos];

    switch (criteria) {
      case 'name':
        sortedTodos.sort((a, b) => a.item.localeCompare(b.item));
        break;
      case 'time':
        sortedTodos.sort((a, b) => new Date(a.time) - new Date(b.time));
        break;
      default:
        // No sorting, maintain the current order
        break;
    }

    setTodos(sortedTodos);
    setSortCriteria(criteria);
  };

  return (
    <div className="bg-black h-screen p-3">
      <div className="rounded mx-auto w-[50%] h-[60vh] shadow-2xl bg-white">
        <div className="flex justify-end mb-3">
          <label className="mr-3">Sort by:</label>
          <select
            value={sortCriteria}
            onChange={(e) => sortTodos(e.target.value)}
          >
            <option value="none">None</option>
            <option value="name">Name</option>
            <option value="time">Time</option>
          </select>
        </div>
        <Inputfield handler={addToDoHandler} />
        <Box data={todos} />
      </div>
    </div>
  );
}

export default App;