const getCurrentTime = () => {
  const options = {
    timeZone: 'Asia/Seoul',
    hour12: true,
    weekday: "long", // Monday, Tuesday, Wednesday, etc.
    year: "2-digit",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  // Get the current time
  const currentTime = new Date().toLocaleString("ko-KR", options); //language not location

  //Render
  document.querySelector(".clock").innerHTML = currentTime;
  document.querySelector("h1").innerHTML = "서울";

  setTimeout(getCurrentTime, 100);
}


