import React, { useReducer } from 'react';

export const ConfigsContext = React.createContext();

const initialState = {
  time: {
    activity: 60 * 25,
    shortPause: 60 * 5,
    longPause: 60 * 20,
  },
  actualActivity: 'activity',
  count: {
    activity: 0,
    shortPause: 0,
    longPause: 0,
  },
  audio: 'alarm.wav',
};

const configReducer = (state, action) => {
  if (action.type === 'ACTIVITY') {
    const actualActivity = state.actualActivity;
    let newCount = {
      ...state.count,
      [actualActivity]: state.count[actualActivity] + 1,
    };
    let newActivity;

    if (actualActivity === 'activity') {
      newActivity = 'shortPause';
      if (newCount.activity % 4 === 0 && state.count.activity !== 0) {
        newActivity = 'longPause';
      }
    } else if (actualActivity === 'shortPause') {
      newActivity = 'activity';
    } else if (actualActivity === 'longPause') {
      newActivity = 'activity';
    }
    return { ...state, actualActivity: newActivity, count: newCount };
  }

  if (action.type === 'UPDATE') {
    return { ...state, ...action.newConfig };
  }

  if (action.type === 'INITIAL_VALUE') {
    return { ...state, time: initialState.time };
  }
};

const ConfigsContextProvider = ({ children }) => {
  const [configs, dispatchConfigs] = useReducer(configReducer, initialState);

  const changeActivity = () => {
    dispatchConfigs({ type: 'ACTIVITY' });
  };

  const updateConfigs = (newConfig) => {
    dispatchConfigs({ type: 'UPDATE', newConfig });
  };

  const initialConfig = () => {
    dispatchConfigs({ type: 'INITIAL_VALUE' });
  };

  return (
    <ConfigsContext.Provider
      value={{
        configs,
        changeActivity,
        updateConfigs,
        initialConfig,
        initialState,
      }}
    >
      {children}
    </ConfigsContext.Provider>
  );
};

export default ConfigsContextProvider;
