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

                db.collection("posts").orderBy("timestamp", "desc")
                .onSnapshot( (snapshot) => 
            
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

                setInput(""); 
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

             {posts.map(({ id, data: { name, description, message, photoURl}}) => (
                    <Post 
                    key = {id}
                    name = {name}
                    description={ description}
                    message={ message}
                    photoUrl={ photoURl}
                    />
                ))} 

            </div>
            
        )
        }

        export default Feed