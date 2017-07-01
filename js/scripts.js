var slideIndex = 1;
var timeout = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("badge");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.opacity = "0";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace("active", "");
  }
  x[slideIndex-1].style.opacity = "1";
  dots[slideIndex-1].className += " active";

  clearTimeout(timeout);
  timeout = setTimeout(function(){ showDivs(slideIndex += 1); }, 10000);
}


/* Services */
$('document').ready(function() {
    $('#contability, #fiscal, #personal, #partner, #persons, #export').click( function() {
        var id =  $(this).attr('id');
        $('#contability, #fiscal, #personal, #partner, #persons, #export').removeClass("active");
         $(this).addClass("active");
        $('.contability, .fiscal, .personal, .partner, .persons, .export').hide();
        $('.'+id).fadeIn();
    });
});

/* Question Pop Up */
$('#question-01').on('click', function() {
    $('.question-01').fadeIn();
    $('.box-questions').fadeOut(10);
});
$('#question-02').on('click', function() {
    $('.question-02').fadeIn();
    $('.box-questions').fadeOut(10);
});
$('.close').on('click', function() {
    $('.box-questions').fadeIn();
    $('.question-01,.question-02').fadeOut(10);
});


/* Scroll */
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();

	if (scroll >= 600) {
		$(".menu").addClass('fixed');
	} else {
		$(".menu").removeClass('fixed');
	}
});
