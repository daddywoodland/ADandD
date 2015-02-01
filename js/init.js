(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

      var fixedNav = $('.navbar-fixed')[0];
      var offsetFixeNavHeight = fixedNav == undefined ? 0 : fixedNav.clientHeight;
      offsetFixeNavHeight = (offsetFixeNavHeight == undefined ? 0 : offsetFixeNavHeight);
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - offsetFixeNavHeight
                }, 1000);
                return false;
            }
        }
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space