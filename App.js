import React from 'react';
import './App.css'; // Import App.css instead of index.css
import NavBar from './NavBar'; // Adjust paths based on your structure
import FeaturedArticlesAndTutorials from './ArticleTutorial';
import Form from './SignUp';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavBar />
      <FeaturedArticlesAndTutorials />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
