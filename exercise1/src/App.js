import './App.css';
// import Hello from './component/Hello';
// import Hello from './component/Hello3';
// import Welcome from './component/Welcome';
// import styles from "./App.module.css";

import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<DayList />} />
          <Route path="/day/:day" exact element={<Day />} />
          <Route path="/create_word" exact element={CreateWord}></Route>
          <Route path="/create_day" exact element={CreateDay}></Route>
          <Route path="*" exact element={<EmptyPage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}


 



// function App(){
//   return (<div className="App">
//     <h3>pros : properties</h3>
//     <Hello age={10}/>
//     <Hello age={20}/>
//     <Hello age={30}/>

//   </div>
//   );
// }



// // 함수1
// function App() {
//   const name = "Tom";
//   const naver = {
//     name : '네이버',
//     url: 'https://naver.com',
//   }
//   return (
//     <div className="App">
//       <h1
//         style={{
//           color: "#f0f",
//           backgroundColor : "green",

//         }}
//       >
//         Hello, {name}. <p>{2 + 3}</p>
//       </h1>
//       <a href={naver.url}>{naver.name}</a>
//     </div>
//   )
// }


export default App;
