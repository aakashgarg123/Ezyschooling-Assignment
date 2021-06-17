import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {
    useParams
  } from "react-router-dom";

const PostDetail = (props) => {
    let { id } = useParams();

    const [post,setPost] = useState()  //state for post response
    const [comment,setComment] = useState() // state for comment response
    const [userDetail,setUserDetail] = useState() // state for user details
    
   
    useEffect(() => {
        fetchPostDetails()
    },[id])

    //helper function for calling  post,comment and user detail apis
    const fetchPostDetails = async () => {
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        
        const commentResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`)
        setPost(postResponse.data)
        setComment(commentResponse.data)
        setUserDetail(userResponse.data)
    }

   
    return (
        <div>
            { post && comment && userDetail &&
            <React.Fragment>
                <div className="card text-center ">
        
                    <div className="card-body">
                        <h4 className="card-title text-primary">{post.title}</h4>
                        <p className="card-text">
                            {post.body}
                        </p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                       
                    </div>

                    
                </div>
                
                <div className="card text-center">

                        <h4 className="card-title text-warning">Comments:</h4>
                        { comment.map((item,idx) => {
                            return(
                            <p key={idx} className="card-text">{item.body}</p>
                            )
                        })}     
                </div>

                <div className="card text-center">

                        <h4 className="card-title text-success">Author:{userDetail.name}</h4>
                        
                </div>

                

        

        </React.Fragment>      
}
        </div>
    )
}

export default PostDetail