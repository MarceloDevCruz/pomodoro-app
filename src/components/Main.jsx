import React from 'react';

import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs';

const Main = () => {
  return (
    <main className="main">
      <h1 className="main__title">Pomodoro App</h1>
      <h2 className="main__time">25:00</h2>
      <div className="btn__container">
        <button className="btn">iniciar</button>
        <BsFillPlayCircleFill className="btn__icon" />
      </div>
    </main>
  );
};

export default Main;
