import React, { useEffect, useState } from 'react'
import "./Feed.css"
import InputOptions from './InputOptions'
import Post from './Post'
import {db} from './firebase'
import firebase from 'firebase/compat/app';


        function Feed() {

            const [input, setInput] = useState('');
            const [posts, setPosts] = useState([]);

            useEffect( ()  =>  {

                db.collection("posts").onSnapshot( (snapshot) => 
            
                    setPosts(
                snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
                );

            }, []);

            const sendPost = (e) => {
                e.preventDefault();

                db.collection('posts').add({
                    name: 'Madhuresh Ranjan',
                    description:'this is a test',
                    message: input,
                    photoURl: '',
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
            }

        return (

            <div className='feed'>
                <div className='feed_inputcontainer'>
                    <div className='feed_input'>
                        
                    <img src="/edit.svg" alt=""/>
                <form>
                    <input value= {input} onChange={e => setInput(e.target.value)}  type="text" />

                     <button onClick={sendPost} type="submit"> Send </button>

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