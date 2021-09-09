import React from 'react';
import COOP from "../img/theCOOP.png";
import './Header.css';

function Title() {
    return (
      <>
        <div>
            <img className='logo' src={COOP} height="200px" alt='logo'></img>
        </div>
        <div className='title'>
            <h1>Employee List</h1>
        </div>
      </>
    )
}

export default Title;