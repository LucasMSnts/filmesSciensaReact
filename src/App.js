import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header';
import Menufixed from './Components/menu-fixed/menu-fixed';
import GalleryContainer from './Components/gallery-container/gallery-container';

function App() {
  return (
    <div>
      <Menufixed />
      <Header />
      <GalleryContainer />

    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
        
    //   </header>
    // </div>
  );
}

export default App;
