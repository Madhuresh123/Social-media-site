import React from 'react'
import "./Widgets.css"

function Widgets() {

    const newsArticle =(heading, subtitle) => (
        <div className='widgets_article'>
            <div className='widgets_articleLeft'></div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>

        </div>
    )



  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>Linkedin News</h2>
            <img src='./info.svg' alt=''/>
        </div>
        {newsArticle("Amazon is hiring!", "apply now!")}
    </div>
  )
}

export default Widgets