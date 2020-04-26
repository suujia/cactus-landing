import utils from './Utils';


utils.$document.ready(() => {
  const $slick = $('.slick-carousel');
  if ($slick.length) {
    $('.slick-carousel').slick({});
  }
  return false;
});
