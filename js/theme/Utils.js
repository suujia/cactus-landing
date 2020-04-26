'use strict';
/*-----------------------------------------------
|   Utilities
-----------------------------------------------*/
const utils = (($) => {
  const Utils = {
    $window: $(window),
    $document: $(document),
    $html: $('html'),
    $body: $('body'),
    $main: $('main'),
    isRTL() {
      return this.$html.attr('dir') === 'rtl';
    },
    location: window.location,
    nua: navigator.userAgent,
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
    colorCodes: {
      primary:   '#5A45FF',
      secondary: '#748194',
      success:   '#00d27a',
      info:      '#39afd1',
      warning:   '#f5803e',
      danger:    '#FE3162',
      light:     '#f9fafd',
      dark:      '#0b1727'
    },
    offset(element) {
      const rect = element.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    },

    isScrolledIntoViewJS(element) {
      const windowHeight = window.innerHeight;
      const elemTop = this.offset(element).top;
      const elemHeight = element.offsetHeight;
      const windowScrollTop = window.scrollY;

      return elemTop <= (windowScrollTop + windowHeight)
        && windowScrollTop <= (elemTop + elemHeight);
    },

    isScrolledIntoView(el) {
      const $el = $(el);
      const windowHeight = this.$window.height();
      const elemTop = $el.offset().top;
      const elemHeight = $el.height();
      const windowScrollTop = this.$window.scrollTop();

      return elemTop <= (windowScrollTop + windowHeight)
        && windowScrollTop <= (elemTop + elemHeight);
    },
    getCurrentScreanBreakpoint() {
      let currentScrean = '';
      const windowWidth = this.$window.width();
      $.each(this.breakpoints, (index, value) => {
        if (windowWidth >= value) {
          currentScrean = index;
        } else if (windowWidth >= this.breakpoints.xl) {
          currentScrean = 'xl';
        }
      });

      return { currentScrean, currentBreakpoint: this.breakpoints[currentScrean] };
    },
  };
  return Utils;
})(jQuery);

export default utils;
