import React from 'react';

import { BsThreeDotsVertical, BsFillCircleFill } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react';
import { ConfigsContext } from '../redux/configRedux';

const Header = () => {
  const { configs } = useContext(ConfigsContext);
  const { actualActivity } = configs;

  const [activity, setActivity] = useState(actualActivity);

  useEffect(() => {
    if (actualActivity === 'shortPause') setActivity('Pausa curta');
    if (actualActivity === 'longPause') setActivity('Pausa longa');
    if (actualActivity === 'activity') setActivity('Atividade');
  }, [actualActivity]);

  return (
    <header className="header">
      <div className="header__activity">
        <div className="btn__container">
          <button className="btn">Menu</button>
          <BsFillCircleFill className="btn__icon" />
          <BsThreeDotsVertical className="btn__icon btn__icon-transparent" />
        </div>
        <h4 className="header__title">Tarefa atual</h4>
        <p className="header__text">{activity}</p>
      </div>
    </header>
  );
};

export default Header;
