import React, { Component } from 'react';

import './styles.css';

import Post from '../Post/';

import avatar01 from '../../assets/avatar01.jpg';
import avatar02 from '../../assets/avatar02.png';
import avatar03 from '../../assets/avatar03.png';
import avatar04 from '../../assets/avatar04.png';


class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: avatar01
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: avatar02
            },
            content: "A Rocketseat sempre está em busca de novos membros para o time, e geralmente ficamos de olho em quem se se destaca no bootacamp, inclusive 80% do nosso time é composto por alunos do bootcamp."
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: avatar03
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe me informar oque faz a rocketseat ?",
        comments: [
          {
            id: 1,
            author: {
              name: "Lucas Morales",
              avatar: avatar04
            },
            content: "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível."
          }
        ]
      }
    ]
  }

render(){
  return(
    <>
      {this.state.posts.map(post => (
        <div className="post-list">
          <Post key={post.id} data={post}/>
        </div>
      ))}
    
    </>
  )
}

}

export default PostList;