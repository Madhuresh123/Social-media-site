import React from 'react'
import "./Post.css"

function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>

        <div className='post_header'>
            <img src='male-user@2x.png' alt ="" />
            <div className='post_info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post_body'>
            <p>{message}</p>
        </div>

        <div className='post_buttons'>

            <div className='post_options'>
                <img src="/like.svg" alt=""/>
                <h4>Like</h4>
            </div>

                <div className='post_options'>
                <img src="/comment.svg" alt=""/>
                <h4>Comment</h4>
                </div>

                <div className='post_options'>
                <img src="share.svg" alt=""/>
                <h4>Share</h4>
                </div>

                <div className='post_options'>
                <img src="send.svg" alt=""/>
                <h4>Sent</h4>
                </div>

            </div>

            </div>
  )
}

export default Post