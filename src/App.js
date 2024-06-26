import './App.css';
import Login from './Pages/Login';
import Header from './Pages/Header';
//import { BrowserRouter, Routes } from 'react-router-dom';
//import { Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Login/>
    </div>
    
     // <BrowserRouter>
      //<Header/>
     // <Routes>
       // <Route path="/login" element={<Login/>}/>
      //</Routes>
     // </BrowserRouter>

  );
}

export default App;
