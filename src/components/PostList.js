import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Post from './Post';

const PostList = () => {

    const [posts,setPosts] = useState() //state variable for storing the posts from the api

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            setPosts(response.data)
        
        })
    },[])

    

    return (
        <div>
            { posts && posts.map((post) => {
                return (
                    <Link style={{ textDecoration: 'none' }} key={post.id} to={`/post/${post.id}`}> <Post post={post} /> </Link> 
                )
            })}
            
        </div>
    )
}

export default PostList