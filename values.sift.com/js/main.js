if(window.jQuery) {
	$.each(document.styleSheets, function(i,sheet) {
	  if(sheet.href=='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css') {
	    var rules = sheet.rules ? sheet.rules : sheet.cssRules;
	    if ((rules == null) || (rules.length == 0)) {
	      $('<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />').appendTo('head');
	    }
	 }
	});
}

/** Header scroll down **/

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 500);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

/** Header scroll down **/


/** Smooth Scrolling **/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/** Smooth Scrolling **/


/** Hide mobile menu after clicking on a link **/
 $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
/** Hide mobile menu after clicking on a link **/
