import React from 'react';

import './styles.css';



import Comment from '../Comment';

function Post({data}) {
  return(
  <>
      <div className="perfil-name">
          <img src="" width="50" alt="" srcset={data.author.avatar}/>
            <div className="name-date">
            <strong>{data.author.name}</strong>
            <small>{data.date}</small>
            </div>
      </div>

      <div className="perfil-content">
       <strong>{data.content}</strong>
      
      </div>

      <div className="comment">
      {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
      </>
    )
  
}

export default Post;