import React from 'react';
import { useState } from 'react';
import Employees from '../employees.json';
import './SearchForm.css';

function SearchForm(props) {
    const [searchTerm, setSearchTerm] = useState('');
    
    console.log(searchTerm);
    return (
        <div className="search-form col-sm">
            <div className="searchText">
                <input id="searchBox" className="form-control me-2 row" type="text" placeholder="Search by employee name" aria-label="Search" 
                onChange={e => {setSearchTerm(e.target.value)}} 
                />
            </div>
            <div className='employee-list row'>
                {Employees.filter(val => {       
                    if (searchTerm === "") {
                        console.log(val);
                        return val 
                    } else if (val.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        console.log(val);
                        console.log(searchTerm);
                        return val
                    }
                }).map((val, key) => { 
                    if (val) {
                      return (
                        <div className="employees" key={key}>
                          <p className="name">{val.fullName}</p>
                          <p className="cell">{val.cell}</p>
                        </div>
                      )
                    } else if (!val) {
                      return (
                        <div>
                            <p>No matching results</p>
                        </div>
                      )
                    }
                })}
            </div>
        </div>
    )
}

export default SearchForm;
