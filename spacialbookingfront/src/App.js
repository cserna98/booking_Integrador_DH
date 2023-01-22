import logo from './logo.svg';
import './App.css';
import Login from './components/Login.jsx';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
    <Login title={"Iniciar sesión"}></Login>
    <Outlet></Outlet>
    </>
    // <div className="App">
      
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
