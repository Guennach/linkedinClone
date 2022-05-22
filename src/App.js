import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Post from './components/Post';
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
        <div className='feed_post_container'>
          <Feed/>
          <Post/>
        </div>
      
      </div>
      {/* Widgets */}
    </div>
  );
}

export default App;
