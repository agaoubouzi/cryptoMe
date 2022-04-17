import React from 'react';


const Post = (props) => {
  const post = props.post



  return (
    <div className="post" style={{ backgroundImage: `url('${post.image}')` }}>
      <a href={post.url} target="_blank" rel="noreferrer" className="post-title">
        {post.title}
      </a>
    </div >
  );

}
export default Post;