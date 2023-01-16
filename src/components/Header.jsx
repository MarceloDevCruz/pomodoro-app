import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <button className="btn">Menu</button>
      <div className="header__activity">
        <h4 className="header__title">Tarefa atual</h4>
        <p className="header__text">Atividade</p>
      </div>
    </header>
  );
};

export default Header;
