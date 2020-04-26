/* eslint-disable */

/*-----------------------------------------------
|   day hours minutes timer
-----------------------------------------------*/

utils.$document.ready(() => {
  const $timers = $("[data-timer]");
  $timers.each((index, value) => {
    const $timer = $(value);
    const time = $timer.data('timer');

    function makeTimer() {
      let endTime = new Date(time);
      endTime = (Date.parse(endTime) / 1000);

      let now = new Date();
      now = Date.parse(now) / 1000;

      const timeLeft = endTime - now;

      let days = Math.floor(timeLeft / 86400);
      let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
      let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
      let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

      if (hours < "10") { hours = "0" + hours; }
      if (minutes < "10") { minutes = "0" + minutes; }
      if (seconds < "10") { seconds = "0" + seconds; }

      $timer.find(".days").html(days);
      $timer.find(".hours").html(hours);
      $timer.find(".minutes").html(minutes );
      $timer.find(".seconds").html(seconds );
    }
    setInterval(() => makeTimer(), 1000);
  });

});


