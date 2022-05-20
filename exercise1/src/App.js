import logo from './logo.svg';
import './App.css';

import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           안녕하세요 김재정입니다.
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  class HelloWorld extends React.Component { 
    render() { 
      return <div> 
        <h1>Hello, world!</h1> 
        <hr/> 
        <h4>This is React APP!</h4> 
        </div>; 
        } 
        
      } 
  ReactDOM.render( 
  <HelloWorld/>, 
  document.getElementById('root') 
  );
}


export default App;
