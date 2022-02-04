const Time = (timeStamp) => {
  let date = new Date(timeStamp * 1000);
  return date;
};

export default Time;
