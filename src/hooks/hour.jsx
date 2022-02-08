function hour(time) {
  let now = new Date().getTime();
  return {
    time: time,
    now: now,
  };
}

export default hour;
