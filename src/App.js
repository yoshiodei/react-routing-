import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
