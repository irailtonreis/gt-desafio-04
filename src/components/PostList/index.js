import React, { Component } from 'react';

import './styles.css';

import Profile from '../../assets/profile.png';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  }

render(){
  return(
    <>
    <div className="post-list">
      {this.state.posts.map(post => (
        <div className="post-name">
        <img src={Profile} alt=""/>
        <div className="name-desc">
        <strong>{ post.author.name}</strong>
        <small>{ post.date}</small>
        </div>
        </div>
      ))}
    </div>
    </>
  )
}

}

export default PostList;