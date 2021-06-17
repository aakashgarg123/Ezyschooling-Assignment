import React from 'react';

//Component for rendering each post 
const Post = ({post}) => {

    
    return (
        <div>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
            </div>
</div>
        </div>
    )
}

export default Post;