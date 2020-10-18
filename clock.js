const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector(".js-title");

function getTime() {
  const date = new Date(); //Date is class
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000); // update fn everty sec
}

init();
