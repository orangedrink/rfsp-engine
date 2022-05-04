import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Panel from './pages/Panel';
import Hello from './pages/Hello'
import Header from './components/Header';
import Admin from './pages/Admin'
function App() {
  const loggedIn = localStorage.getItem('token')?true:false

  return (
    <div className="App">
      <Router>
        {false&&<Header loggedIn={loggedIn}/>}
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/hello' element={<Hello />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/panel/:id' element={<Panel />} />
              <Route path='/play/:id' element={<Panel />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
