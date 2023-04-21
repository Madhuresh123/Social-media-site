import React from 'react'
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    );


  return (
    <div className='sidebar'>

            <div className='sidebar_top'>

                <img src="/bg.jpg" alt=""/>
                {/* <img className="sidebarProfile" src="/male-user@2x.png" alt=""/> */}

                <h2>Madhuresh Ranjan</h2>
                <h4>madhruesh91394@gmail.com</h4>


            </div>
        <div className='sidebar_stats'>
        <div className='sidebar_stat'>
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'>234</p>

        </div>
        <div className='sidebar_stat'>

        <p>Views on post</p>
            <p className='sidebar_statNumber'>284</p>
        </div>
        </div>

        <div className='sidebar_bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('firebase')}
            {recentItem('redux')}
            {recentItem('programming')}
            {recentItem('design')}
            {recentItem('development')}

        </div>

    </div>
  )
}

export default Sidebar