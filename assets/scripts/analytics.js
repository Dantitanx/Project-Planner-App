const intervalId = setInterval(() => {
  console.log('Sending Analytics data...');
}, 2000);

document
  .getElementById('stop-analytics-button')
  .addEventListener('click', () => {
    clearInterval(intervalId);
  });
