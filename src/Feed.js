        import React, { useState } from 'react'
        import "./Feed.css"
import InputOptions from './InputOptions'
import Post from './Post'

        function Feed() {

            const [posts, setPosts] = useState([]);

            const sendPost = (e) => {
                e.preventDefault();
            }

        return (

            <div className='feed'>
                <div className='feed_inputcontainer'>
                    <div className='feed_input'>
                        
                    <img src="/edit.svg" alt=""/>
                <form>
                    <input type="text" />

                    <button onClick={sendPost} type="submit">Send </button>

                </form>

                    </div>

                    <div className='feed_inputOptions'>

                    <InputOptions/>

                    </div>
                </div>
                {posts.map((post) => (
                    <Post/>
                ))}

                <Post name="Madhuresh" description="This is the test" message="This is working" />
            </div>
            
        )
        }

        export default Feed