import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import EmployeeList from './components/EmployeeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="page">
      <div className="intro">
        {/* <Jumbotron /> */}
        <Header/>
        <SearchForm />
      </div>
      <div className="employees">
        <EmployeeList />
      </div>
    </div>
    
  );
}

export default App;
