let countdownTime = 0;
let intervalId = null;

onmessage = function(event) {
  switch (event.data.command) {
    case 'start':
      countdownTime = event.data.time;
      if (intervalId === null) {
        intervalId = setInterval(() => {
          countdownTime--;
          postMessage({ type: 'tick', countdownTime });
          if (countdownTime <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            postMessage({ type: 'done' });
          }
        }, 1000);
      }
      break;
    case 'stop':
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
      break;
    case 'reset':
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
      countdownTime = 0;
      postMessage({ type: 'reset', countdownTime });
      break;
    case 'update':
      countdownTime = event.data.time;
      break;
  }
};
