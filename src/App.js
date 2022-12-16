import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Success from './components/Success';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path = '/submission-success' element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
