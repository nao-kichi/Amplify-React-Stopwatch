const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const recordButton = document.getElementById('record');
const removeButton = document.getElementById('remove');
const recordList = document.getElementById('record-list');

let startTime;
let stopTime = 0;
let timeoutID;

const dateDisplay = document.getElementById('date');

function displayDate() {
  const currentDate = new Date();
  const year = String(currentDate.getFullYear());
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  dateDisplay.textContent = `Today's Date: ${year}-${month}-${day}`;
}

displayDate();

function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const hours = String(currentTime.getUTCHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  const milliseconds = String(currentTime.getMilliseconds()).padStart(3, '0');

  time.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  timeoutID = setTimeout(displayTime, 10);
}

function recordTime() {
  const recordItem = document.createElement('li');
  recordItem.textContent = time.textContent;
  recordList.appendChild(recordItem);
}

function removeRecord() {
  while (recordList.firstChild) {
    recordList.removeChild(recordList.firstChild);
  }
}

// startButton
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  recordButton.disabled = true;
  removeButton.disabled = true;
  startTime = Date.now();
  displayTime();
});

stopButton.addEventListener('click', function () {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  recordButton.disabled = false;
  removeButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += Date.now() - startTime;
});

// resetButton
resetButton.addEventListener('click', function () {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  recordButton.disabled = true;
  removeButton.disabled = true;
  time.textContent = '00:00:00.000';
  stopTime = 0;
});

recordButton.addEventListener('click', recordTime);
removeButton.addEventListener('click', removeRecord);
