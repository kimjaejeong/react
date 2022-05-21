import './App.css';
// import Hello from './component/Hello';
import Hello from './component/Hello2';
import Welcome from './component/Welcome';
import styles from "./App.module.css";

function App(){
  return (<div className="App">
    <Hello />
    {/* <Welcome /> */}
    {/* <div className={styles.box}>App</div> */}
  </div>
  );
}



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
