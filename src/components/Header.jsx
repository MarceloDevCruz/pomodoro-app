import React from 'react';

import { BsThreeDotsVertical, BsFillCircleFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="header">
      <div className="header__activity">
        <div className="btn__container">
          <button className="btn">Menu</button>
          <BsFillCircleFill className="btn__icon" />
          <BsThreeDotsVertical className="btn__icon btn__icon-transparent" />
        </div>
        <h4 className="header__title">Tarefa atual</h4>
        <p className="header__text">Atividade</p>
      </div>
    </header>
  );
};

export default Header;
