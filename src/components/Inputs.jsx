import React from 'react';
import { useState, useEffect, useContext } from 'react';
import secondsTime from '../utils/secondsTime';
import { ConfigsContext } from '../redux/configRedux';

const Inputs = ({ title, value, type }) => {
  const min = 1;
  const max = 3600;

  const [inputValue, setInputValue] = useState(value);

  const { configs, updateConfigs } = useContext(ConfigsContext);

  const handleOnChange = (e) => {
    const newValue = e.target.value;

    newValue >= max || newValue < min
      ? setInputValue(undefined)
      : setInputValue(newValue);

    console.log(type);
    console.log(configs.time + `.${type}`);
  };

  return (
    <>
      <h3 className="input__title">{title}</h3>
      <div className="input">
        <input
          defaultValue={inputValue}
          type="number"
          className="input__container"
          onChange={handleOnChange}
        />
        {!inputValue ? (
          <p className="input__text-error">
            Digite um valor entre {min} até {max - 1}
          </p>
        ) : (
          <p className="input__text">equivale a {secondsTime(inputValue)}min</p>
        )}
      </div>
    </>
  );
};

export default Inputs;
