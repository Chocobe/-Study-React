const loggerMiddleware = store => next => action => {
  console.group(action?.type);
  console.log("prevState: ", store.getState());
  console.log("action: ", action);
  next(action);
  console.log("curState: ", store.getState());
  console.groupEnd();
};

export default loggerMiddleware;