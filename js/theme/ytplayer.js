
import utils from './Utils';

/*-----------------------------------------------
|   YTPlayer
-----------------------------------------------*/
utils.$document.ready(() => {
  const Selector = {
    BG_YOUTUBE: '.bg-youtube',
    BG_HOLDER: '.bg-holder',
  };
  const DATA_KEY = { PROPERTY: 'property' };
  const $youtubeBackground = $(Selector.BG_YOUTUBE);
  if ($youtubeBackground.length) {
    $youtubeBackground.each((index, value) => {
      const $this = $(value);
      // console.log($this.data(DATA_KEY.PROPERTY));
      $this.data(DATA_KEY.PROPERTY, $.extend($this.data(DATA_KEY.PROPERTY), {
        showControls: false,
        loop: true,
        mute: true,
        containment: $this.parent(Selector.BG_HOLDER),
      }));
      $this.YTPlayer();

      const $button = $($this.data(DATA_KEY.PROPERTY).actions.playPause);
      let playState = $this.data(DATA_KEY.PROPERTY).autoPlay;
      console.log(playState);
      // console.log($this.data(DATA_KEY.PROPERTY));
      // console.log($this.data(DATA_KEY.PROPERTY).autoPlay);
      const $playIcon = $button.children('.fa-play');
      const $pauseIcon = $button.children('.fa-pause');
      if (playState === true) {
        $pauseIcon.addClass('d-none');
      } else if (playState === false) {
        $playIcon.addClass('d-none');
      }
      $button.on('click', () => {
        if (playState === true) {
          const $buttonIcon = $button.children('.svg-inline--fa');
          $buttonIcon.toggleClass('d-none');
          $this.YTPPause();
          playState = false;
        } else if (playState === false) {
          const $buttonIcon = $button.children('.svg-inline--fa');
          $buttonIcon.toggleClass('d-none');
          $this.YTPPlay();
          playState = true;

        }
      });
    });
  }
});
