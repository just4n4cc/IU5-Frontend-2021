import React from 'react'
import './App.css';
import {Todo} from './components/Todo/Todo'
import {Todone} from './components/Todone/Todone'

let currentIndex = -1;

function App() {
  const [todos, setTodo] = React.useState([]);
  const [todones, setTodone] = React.useState([]);
  const [addLabel, setAddLabel] = React.useState(['']);
  function AddLabel(props) {
    return (
      <input type="text" defaultValue={props.title} placeholder="Add new tododo here!" onKeyDown={(e) => handleAddKeyDown(e)} autoFocus/>
    );
  } 
  function handleTodoCheckBoxClick(e) {
    setTodone([...todones, e.target.title]);
    setTodo(todos.filter((val)=> val !== e.target.title));
  }

  function handleOnClickLabel(e) {
    currentIndex = parseInt(e.target.title[e.target.title.length - 1]);
    setAddLabel(e.target.innerText);
  }

  function handleTodoneCheckBoxClick(e) {    
    setTodo([...todos, e.target.title]);
    setTodone(todones.filter((val) => val !== e.target.title));
  }
  function handleOnDoubleClick(e) {
    setTodone(todones.filter((val)=> val !== e.target.innerText));
  }
  const handleAddKeyDown = (e) => {
    if (e.code === "Enter") {
      if (e.target.value === "") {
        alert("Dodo not dodo empty tododo");
        return;
      }
      console.log(e.target.value);
      console.log(currentIndex);
      if (currentIndex === -1) {
      setTodo([...todos, e.target.value]);
      } else {
        console.log(e.target.value);
        console.log(currentIndex);
        todos[currentIndex] = e.target.value;
        currentIndex = -1;
        setTodo([...todos]);
        setAddLabel('');
      }
    }
  }
  return (
    <div className="App">
      <header>
        <h2>Tododo</h2>
      </header>
      <div className="Main">
        <div className="Frame">
          {
            todos.map((title, index) => (
              // <TodoTest key={"Todo" + index} title={title} onClickCheckBox={(e) => handleTodoCheckBoxClick(e)}/>
              <Todo labelKey={"Todo" + index} title={title} onClickCheckBox={(e) => handleTodoCheckBoxClick(e)} onClickLabel={(e) => handleOnClickLabel(e)}/>
            )
            )
          }          
          <AddLabel title={addLabel}/>
          {todones.map((title, index) => (
              <Todone labelKey={"Todone" + index} title={title} onClickCheckBox={(e) => handleTodoneCheckBoxClick(e)} onClickLabel={(e) => handleOnDoubleClick(e)}/>
            )
            )
          }
        </div>
      </div>
      <footer>
          <h2>// My site, my rules</h2>
          <div>
            <p>// Tododos:<br/>
            // 1. To edit ur tododo JUST click on the text.<br/>
            // 2. To save any tododo JUST hit Enter button.</p>    
            
            <p>// Tododones:<br/>
            // 1. To undodo ur tododone JUST click on checkbox.<br/>
            // 2. To remove any tododone JUST click on the text.</p>     
          </div>
      </footer>
    </div>
  );
}

export default App;
