import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* App body */}
      <div className='content'>
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <Feed/>
      </div>
      {/* Widgets */}
    </div>
  );
}

export default App;
