import React from 'react';
import ReactDOM from 'react-dom';

import ClassComponent from './ClassComponent';

const Functional = () => {
  let count = 0;

  window.setInterval(() => {
    count++;
  }, 1000);

  return <h2>Count is: { count }</h2>
}

const App = () => {
  return (
    <div>
      <h1>Functional:</h1>
      <Functional/>

       <h1>Class Component</h1>
      <ClassComponent/>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));