import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="page">
        <Header/>
        <SearchForm />
    </div>
  );
}

export default App;
