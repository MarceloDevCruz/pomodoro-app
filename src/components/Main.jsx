import React, { useState, useContext, useEffect, useRef } from 'react';
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs';
import useInterval from '../hooks/useInterval';
import secondsTime from '../utils/secondsTime';
import { ConfigsContext } from '../redux/configRedux';

const Main = () => {
  const { configs, changeActivity } = useContext(ConfigsContext);
  const [time, setTime] = useState(0);
  const [timeCount, setTimeCount] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(true);
  const [playing, setPlaying] = useState(false);
  const audio = useRef();
  const timeout = useRef();

  useEffect(() => {
    setTime(configs.time[configs.actualActivity]);
  }, [configs.time, configs.actualActivity]);

  useInterval(
    () => {
      if (time === 1) {
        setPlaying(false);
        setTimeCount(false);
        audio.current.play();
        timeout.current = setTimeout(() => {
          changeActivity();
          setPlaying(true);
          setTimeCount(true);
          audio.current.pause();
          audio.current.currentTime = 0;
        }, 8000);
      }
      setTime(time - 1);
    },
    timeCount ? 1000 : null
  );

  const handleButton = () => {
    setPlaying(!playing);
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
      <audio src={`alarm.wav`} ref={audio}></audio>
    </main>
  );
};

export default Main;
