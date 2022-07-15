import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
function App() {
  let [todolist, setTodolist] = useState([])
  let [todoitem, setTodoitem] = useState('')

  function todoItemfunc(event) {
    setTodoitem(event.target.value)

  }
  function createTodo() {
    setTodolist((olddata) => {
      if ((todoitem !== "") && (!todolist.includes(todoitem))) { return [...olddata, todoitem] }
      return [...olddata]
    })
    setTodoitem('')
  }

  function updateItem(key) {

    var updateVal;
    setTodolist((olddata) => {
      updateVal=olddata[key]
      setTodoitem(updateVal)
      return olddata.filter((arrElem, index) => {
        return index !== key;
      })

    })


  }
  function deleteItem(key) {
    setTodolist((olddata) => {
      return olddata.filter((arrElem, index) => {
        return index !== key;
      })

    })}

  return (
    <>
      <h1>TODOS APP</h1>
      <div className='top'>No of remaining tasks : {todolist.length}</div>
      <div><input type="text" value={todoitem} onChange={todoItemfunc}></input>
      <button onClick={createTodo}> Add Task</button></div>
      {todolist.map((ele, index) => {
        return <TodoList ele={ele} index={index} updateItem={updateItem} deleteItem={deleteItem} />
      })}
    </>
);
}

export default App;
