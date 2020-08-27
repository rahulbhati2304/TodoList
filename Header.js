import React from 'react';
const Header = (props) => {
    return(
      <div className='x'>
        <h1>
          You Have {props.numTodos} Todos
        </h1>
      </div>
    )
  }

  export default Header;