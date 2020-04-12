import React, { Component } from 'react';

import './styles.css';

import Post from '../Post/';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: ""
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: ""
            },
            content: "A Rocketseat sempre está em busca de novos membros para o time, e geralmente ficamos de olho em quem se se destaca no bootacamp, inclusive 80% do nosso time é composto por alunos do bootcamp."
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: ""
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: ""
            },
            content: "A Rocketseat sempre está em busca de novos membros para o time, e geralmente ficamos de olho em quem se se destaca no bootacamp, inclusive 80% do nosso time é composto por alunos do bootcamp."
          }
        ]
      }
    ]
  }

render(){
  return(
    <>
    <div className="post-list">
      {this.state.posts.map(post => <Post key={post.id} data={post}/>)}
    </div>
    </>
  )
}

}

export default PostList;