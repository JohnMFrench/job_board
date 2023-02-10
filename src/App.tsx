import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestJobComponent from './components/test_job.component';
import Nav from './components/nav.component';

function App() {
  return (
    <div className="App font-['Open_Sans'] bg-slate-400 mx-auto h-screen">
      <Nav />
      <div className="container bg-slate-200 mx-auto">
        <div className="container p-6 bg-white text-left border-b-4 border-slate-400 bg-banner bg-cover">
          {/* <img src="banner.png" alt="banner" className="max-w-full h-auto" /> */}
          <div className="text-6xl font-bold p-4">Job Board</div>
          <div className="text-2xl max-w-xl bg-white">This is an example of a job board that I created. It is meant to demonstrate my understanding of some technologies in cluding react, aws, and python</div>
          <TestJobComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
