import React from 'react';

import Profile from '../../assets/profile.png';

import './styles.css';

function Comment({data}) {
  return(
    <>
    <div className="user-comment">
      <img src={Profile} width="40" alt="" srcset=""/>
      <div className="small-content">
      <strong>{data.author.name}</strong>
      <small>{data.content}</small>
      </div>
    </div>
    
    </>
  )
}

export default Comment;