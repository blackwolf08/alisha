import React from 'react';
import './App.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Landing from './components/Landing'
import Gallery from './components/Gallery'

function App() {
  return (
    <PerfectScrollbar>
      <Landing />
      <Gallery />
    </PerfectScrollbar>
  );
}

export default App;
