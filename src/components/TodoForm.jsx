/* eslint-disable react/prop-types */
import { useState } from 'react';

export function TodoForm( { onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newItem);
    if (newItem === "")
      return 

    onSubmit(newItem)

    setNewItem("")
  }
  return (
    <form onSubmit={handleSubmit}
    className='todo-form'>
      <div className="form-row">
        <label htmlFor="item">Add Item</label>
        <input value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text"
        id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}