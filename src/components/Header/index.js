import React from 'react';

import './styles.css';

import Profile from '../../assets/profile.png';

function Header() {
  return(
 
    <div className="menu">
      <h2 className="logo">Facebook</h2>
      <div className="profile">
      <a href="#"><h6 className="name">Meu Perfil</h6></a>
      <img src={Profile} alt="" width="50"/>
      </div>
    </div>
    
  )
  
}

export default Header;