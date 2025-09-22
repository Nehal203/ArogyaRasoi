import logo from './logo.svg';
// import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
