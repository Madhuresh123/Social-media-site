import React from 'react'
import "./InputOptions.css"
// import ImageIcon from "@material-ui/icons/Image";

function InputOptions() {
  return (
    <div className='inputOptions'>

      <div className='inputItem'><img src="/image.svg" alt="" />
        <h4>Image</h4></div>   
       
        
       <div className='inputItem'><img src="/video.svg" alt="" />
        <h4>Video</h4></div> 
        
        <div className='inputItem'><img src="/event.svg" alt="" />
        <h4>Event</h4></div>
        

       <div className='inputItem'><img src="/write.svg" alt="" />
        <h4>Write article</h4></div>
        
      

    </div>
  )
}

export default InputOptions