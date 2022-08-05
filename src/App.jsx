import './App.css';
import Hero from './components/Hero/Hero';
import TopBrands from './components/TopBrands/TopBrands';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <TopBrands />
        <Footer />

    </div>
  );
}

export default App;
