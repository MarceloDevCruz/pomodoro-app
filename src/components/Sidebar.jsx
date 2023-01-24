import React from 'react';
import { useState, useContext } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Header from '../components/Header';
import Inputs from './Inputs';
import secondsTime from '../utils/secondsTime';
import { ConfigsContext } from '../redux/configRedux';

const Sidebar = () => {
  const [showButton, setShowButton] = useState(true);
  const { configs, updateConfigs, initialConfig, initialState } =
    useContext(ConfigsContext);

  const [time, setTime] = useState(configs.time);

  const [activity, setActivity] = useState(configs.time.activity);
  const [shortPause, setShortPause] = useState(configs.time.shortPause);
  const [longPause, setLongPause] = useState(configs.time.longPause);

  const handleButton = () => {
    setShowButton(!showButton);
  };

  const handleActivity = (totalTime) => {
    setTime({ ...time, activity: totalTime });
  };

  const handleShortPause = (totalTime) => {
    setTime({ ...time, shortPause: totalTime });
  };

  const handleLongPause = (totalTime) => {
    setTime({ ...time, longPause: totalTime });
  };

  const saveConfig = () => {
    const newConfig = {
      time: time,
    };

    updateConfigs(newConfig);
  };

  const resetConfig = () => {
    updateConfigs(initialState);
    initialConfig();
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
                  updateValue={handleActivity}
                />
              </div>

              <div className="sidebar__config--2">
                <Inputs
                  title={'Intervalo Pausa Curta'}
                  value={configs.time.shortPause}
                  updateValue={handleShortPause}
                />
              </div>

              <div className="sidebar__config--3">
                <Inputs
                  title={'Intervalo Pausa Longa'}
                  value={configs.time.longPause}
                  updateValue={handleLongPause}
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
