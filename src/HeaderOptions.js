import React from 'react'
import './HeaderOptions.css';

function HeaderOptions() {
  return (

    <div className='headerOption'> 

        <div className='options'>
        <img className="home-icon" alt="" src="/home-page@2x.png" />
        <h3 className='herderOption_title'>Home</h3>
        </div>

        <div className='options'>
        <img className="Network-icon" alt="" src="/people@2x.png" />
        <h3 className='herderOption_title'>Network</h3>
        </div>

    
        <div className='options'>
            <img className="Jobs-icon" alt="" src="/storage-box@2x.png" />
            <h3 className='herderOption_title'>Jobs</h3>
        </div>
        
        <div className='options'>
        <img className="message-icon" alt="" src="/vector.svg" />
        <h3 className='herderOption_title'>message</h3>
        </div>
        
        <div className='options'>


        <div classNmae="icons">
        <img className="Notification-icon" alt="" src="/vector1.svg" />
        </div>
        <h3 className='herderOption_title'>Notification</h3>
        </div>
        
        <div className='options'>
        <img className="Profile-icon" alt="" src="/male-user@2x.png" />
        <h3 className='herderOption_title'>Profile</h3>
        </div>
        
    
    </div>
   
  )
}

export default HeaderOptions