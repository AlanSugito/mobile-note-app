const useInputHandler = (callback) => {
  const handleInput = (event) => {
    const {
      nativeEvent: { eventCount, target, text },
    } = event;
    callback(text);
  };

  return handleInput;
};

export default useInputHandler;
