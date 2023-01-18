const secondsTime = (seconds) => {
  const formatTime = (n) => Math.floor(n).toString().padStart(2, '0');

  const min = formatTime((seconds / 60) % 60);
  const sec = formatTime((seconds % 60) % 60);
  return `${min}:${sec}`;
};

export default secondsTime;
