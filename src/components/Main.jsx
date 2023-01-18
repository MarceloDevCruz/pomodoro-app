import React, { useState } from 'react';
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs';
import useInterval from '../hooks/useInterval';
import secondsTime from '../utils/secondsTime';

const Main = () => {
  const [time, setTime] = useState(1500);
  const [timeCount, setTimeCount] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(true);

  useInterval(
    () => {
      setTime(time - 1);
    },
    timeCount ? 1000 : null
  );

  const handleButton = () => {
    setTimeCount(!timeCount);
    setButtonIcon(!buttonIcon);
  };

  return (
    <main className="main">
      <h1 className="main__title">Pomodoro App</h1>
      <h2 className="main__time">{secondsTime(time)}</h2>
      <div className="btn__container">
        <button className="btn" onClick={handleButton}>
          {buttonIcon ? 'iniciar' : 'pausar'}
        </button>
        {buttonIcon ? (
          <BsFillPlayCircleFill onClick={handleButton} className="btn__icon" />
        ) : (
          <BsFillPauseCircleFill onClick={handleButton} className="btn__icon" />
        )}
      </div>
    </main>
  );
};

export default Main;
