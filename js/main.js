jQuery(function($){
	
	var sbar = $("#sbar");
	var sbarContainer = $("#sbarContainer");
	
	var originalSbarTop=sbarContainer.offset().top;
	var view = $(window);
	
	view.bind(
		"scroll resize",
		function(){

			var viewTop = view.scrollTop();
			
			if( (viewTop > originalSbarTop) && !sbar.is(".fixed")){
				sbar
					.removeClass("absolute")
					.addClass("fixed");
			}else if ( (viewTop <= originalSbarTop) && sbar.is(".fixed")){
				sbar
					.removeClass("fixed")
					.addClass("absolute");
			}
		}
	);
});

jQuery(function($){
	
	var videoLink = $("#videoLink");
	var limit = $("#limit");
	
	var originalLimitTop=limit.offset().top;
	var view = $(window);
	
	view.bind(
		"scroll resize",
		function(){

			var viewTop = view.scrollTop();
			
			if( (viewTop < originalLimitTop) && !videoLink.is(".fixed")){
				videoLink
					.removeClass("absolute1")
					.addClass("fixed");
			}else if ( (viewTop >= originalLimitTop) && videoLink.is(".fixed")){
				videoLink
					.removeClass("fixed")
					.addClass("absolute1");
			}
		}
	);
});

function initialize() {
        var mapOptions = {
          center: { lat:51.5039462, lng:-0.1283438},
          zoom: 14
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
				var marker = new google.maps.Marker({
				map:map,
				position: { lat:51.512057, lng: -0.136167},
				icon: 'image/map/Icon.png',
			});
      }
      google.maps.event.addDomListener(window, 'load', initialize);

function bindEvent(e, eventName, callback) {
    if(e.addEventListener)
        e.addEventListener(eventName, callback, false);
    else if(e.attachEvent)
        e.attachEvent('on'+ eventName, callback);
};

(function(){
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
});

$(document).ready(function(){
	$(window).scrollTop($(window).scrollTop()+1);
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing' );
	});
});