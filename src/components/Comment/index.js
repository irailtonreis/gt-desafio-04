import React from 'react';



import './styles.css';

function Comment({data}) {
  return(
    <>
    <div className="user-content">
      <div className="content-items">
      <div className="user-img">
    <img src="" width="35" alt="" srcset=""/>
    </div>

    <div className="user-comment">
      <div className="small-content">
      <strong>{data.author.name}</strong>
      <small>{data.content}</small>
      </div>
    </div>

      </div>
   

    </div>
    
    
    </>
  )
}

export default Comment;