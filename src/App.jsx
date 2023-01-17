import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="container">
      <Background />
      <div className="content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
