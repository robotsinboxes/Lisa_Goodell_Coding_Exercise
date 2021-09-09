import React from 'react';
import { useState } from 'react';
import Employees from '../employees.json';
import './SearchForm.css';

function SearchForm(props) {
    const [searchTerm, setSearchTerm] = useState('');
    
    console.log(searchTerm);
    return (
        <div className="search-form">
            <div id="searchText">
                
                <input id="searchBox" className="form-control me-2" type="text" placeholder="Search by employee name" aria-label="Search" 
                onChange={e => {setSearchTerm(e.target.value)}} 
                />

                {Employees.filter(val => {       
                    if (searchTerm === "") {
                        console.log(val);
                        return val 
                    } else if (val.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        console.log(val);
                        return val
                    }
                }).map((val, key) => { 
                    if (val) {
                      return (
                        <div className="employee" key={key}>
                          <p>{val.fullName}</p>
                        </div>
                      )
                    } else {
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
