import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonial';
import Workshops from './components/Workshop';
import Videos from './components/Videos';
import Authors from './components/Authors';
import Recipes from './components/Recipes';
import About from './components/About';
import RecipeList from './components/RecipeList';
import CategoryPage from './components/CategoryPage';
import RecipeDetail from './components/RecipeDetail';
import Why from './components/Why';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/workshop" element={<Workshops />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/why" element={<Why />} />
        <Route path="/" element={<RecipeList />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;