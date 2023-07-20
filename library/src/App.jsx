import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Library from './components/library';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li>
              <Link to='/Home'>Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/library'>Library</Link>
            </li>
          </ul>
          <main>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/library' element={<Library />} />
            </Routes>
          </main>
        </header>
      </Router>
    </div>
  );
}

export default App;