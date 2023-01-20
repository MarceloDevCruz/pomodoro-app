import React from 'react';
import { BsThreeDotsVertical, BsFillCircleFill } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react';
import { ConfigsContext } from '../redux/configRedux';
import Sidebar from './Sidebar';

const Header = () => {
  const { configs } = useContext(ConfigsContext);
  const { actualActivity } = configs;

  const [activity, setActivity] = useState(actualActivity);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (actualActivity === 'shortPause') setActivity('Pausa curta');
    if (actualActivity === 'longPause') setActivity('Pausa longa');
    if (actualActivity === 'activity') setActivity('Atividade');
  }, [actualActivity]);

  const handleButton = () => {
    setShowButton(!showButton);
  };

  return (
    <>
      {showButton ? (
        <>
          <header className="header">
            <div className="header__activity">
              <div className="btn__container">
                <button className="btn" onClick={handleButton}>
                  Menu
                </button>
                <BsFillCircleFill
                  className="btn__icon"
                  onClick={handleButton}
                />
                <BsThreeDotsVertical
                  className="btn__icon btn__icon-transparent"
                  onClick={handleButton}
                />
              </div>
              <h4 className="header__title">Tarefa atual</h4>
              <p className="header__text">{activity}</p>
            </div>
          </header>
        </>
      ) : (
        <Sidebar />
      )}{' '}
    </>
  );
};

export default Header;
