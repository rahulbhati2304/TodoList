import React from 'react';
const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
      return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    })
    return( 
      <div className="a">
        {todos}
      </div>
    );
  }

const Todo = (props) => {
    return(
      <div className='list'>
        {props.content}
        <button onClick={() => {props.onDelete(props.id)}}>Delete</button>
      </div>
    );
  }

export default TodoList;  
