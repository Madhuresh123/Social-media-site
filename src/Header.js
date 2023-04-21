import React from 'react'
import "./Header.css";
import HeaderOptions from "./HeaderOptions.js";

function Header() {
  return (
    <div className='header'>

        <div className='header_left'>

        <img className="linkedin-icon" alt="" src="/linkedin-icon@2x.png" />


            <div className='header_search'> 

            <img className="search-icon" alt="" src="/search.svg" />

                <input className= "search_input" type='text' />
            </div>


        </div>


        <div className='header_right'>

            <HeaderOptions />

        </div>

    


    </div>
  )
}

export default Header