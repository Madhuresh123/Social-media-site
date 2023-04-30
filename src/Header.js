import React from 'react'
import "./Header.css";
import HeaderOptions from "./HeaderOptions.js";
// import { useDispatch } from 'react-redux';
// import { logout } from './features/userSlice';
// import { auth } from './firebase';




function Header() {
  
  // const dispatch = useDispatch();
  // const logoutOfApp = () => {
  //     dispatch(logout())
  //     auth.signOut();
  // };

  return (
    <div className='header'>

        <div className='header_left'>

        <img className="linkedin-icon" alt="" src="/linkedin-icon@2x.png" />


            <div className='header_search'> 

            <img className="search-icon" alt="" src="/search.svg" />

                <input placeholder='Search' className= "search_input" type='text' />
            </div>


        </div>


        <div className='header_right'>

            <HeaderOptions />

        </div>

    


    </div>
  )
}


export default Header
