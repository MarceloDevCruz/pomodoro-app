import React from 'react';
import { useState, useContext } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Header from '../components/Header';
import Inputs from './Inputs';
import { ConfigsContext } from '../redux/configRedux';

const Sidebar = () => {
  const [showButton, setShowButton] = useState(true);
  const { configs, updateConfigs, initialConfig, initialState } =
    useContext(ConfigsContext);

  const handleButton = () => {
    setShowButton(!showButton);
  };

  const saveConfig = () => {
    console.log(configs.time);
  };

  const resetConfig = () => {
    console.log(1);
  };

  return (
    <>
      {showButton ? (
        <>
          {' '}
          <form onSubmit={(e) => e.preventDefault()}>
            <section className="sidebar">
              <BsFillArrowLeftCircleFill
                className="btn__icon-small sidebar__icon"
                onClick={handleButton}
              />
              <h2 className="sidebar__title">Configurações</h2>
              <div className="sidebar__config--1">
                <Inputs
                  title={'Intervalo Atividade'}
                  value={configs.time.activity}
                  type={'activity'}
                />
              </div>
              <div className="sidebar__config--2">
                <Inputs
                  title={'Intervalo Pausa Curta'}
                  value={configs.time.shortPause}
                  type={'shortPause'}
                />
              </div>
              <div className="sidebar__config--3">
                <Inputs
                  title={'Intervalo Pausa Longa'}
                  value={configs.time.longPause}
                  type={'longPause'}
                />
              </div>
              <div className="sidebar__button">
                <button className="btn btn-config" onClick={saveConfig}>
                  Salvar
                </button>
                <button className="btn btn-config" onClick={resetConfig}>
                  Reset
                </button>
              </div>
            </section>
          </form>
        </>
      ) : (
        <Header />
      )}
    </>
  );
};

export default Sidebar;
