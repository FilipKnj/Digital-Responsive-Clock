

let loop = setInterval(function () {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let prepand = 'PM';
  let time = document.querySelector('#time');

  // (hours > 12) ? hours = hours - 12 : hours = hours;
  // (hours > 12) ? prepand = prepand : prepand = "AM";
  if(hours > 12){
    hours = hours - 12;
    prepand = "PM"
  }else{
    hours = hours;
    prepand = "AM"
  }
  (minutes < 10) ? minutes = `0${minutes}` : minutes = minutes;
  (seconds < 10) ? seconds = `0${seconds}` : seconds = seconds;

  time.innerText = `${hours} : ${minutes} : ${seconds} ${prepand}`
},1000)
