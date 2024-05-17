import { Route, Routes } from 'react-router-dom';
import About from './containers/about/About';
import Contact from './containers/contact/Contact';
import Home from './containers/home/Home';
import Portfolio from './containers/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
