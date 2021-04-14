import './styles/App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import { Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/error'>
          <ErrorPage />
        </Route>
    </div>
  );
}

export default App;
