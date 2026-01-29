jQuery(document).ready(function(){

	
	const humbargerBtn = jQuery('.humbergarBtn');
	
	humbargerBtn.click(function(){

		jQuery('.sitenav').toggleClass('addSlide');

		jQuery(this).toggleClass('close');


	});

$(document).on("scroll",function(){
        if($(document).scrollTop()>150){
            $("header").addClass('sticky');      
            $("header").removeClass('site-header');      
        } else{
            $("header").removeClass('sticky');
            $("header").addClass('site-header');
            
        }
    });

    	$('.row-videoWrap.owl-carousel').owlCarousel({
       loop:true,
        autoplay:true,
         smartSpeed:2000,
        autoplayTimeout:5000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });

          $('.row-service.owl-carousel').owlCarousel({
       loop:true,
        autoplay:false,
         smartSpeed:2000,
        autoplayTimeout:5000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
             768:{
                items:3,
                nav:true
            },
             1200:{
                items:4,
                nav:true
            }
        }
    });
       $('.row-reviews.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });



      $(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});  
          

      $('.row-course.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });
      $('body').on('keyup', '.js-input-mobile', function () {
            var $input = $(this),
            value = $input.val(),
            length = value.length,
            inputCharacter = parseInt(value.slice(-1));

         if (!((length > 0 && inputCharacter >= 0 && inputCharacter <= 10) || (length === 1 && inputCharacter >= 7 && inputCharacter <= 10))) {
            $input.val(value.substring(0, length - 1));
         }
      });

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
     }, 1500);


wow = new WOW({
        animateClass: 'animated',
        mobile: false,
        offset: 100
    });
    wow.init();

    $(function () {
  // Smooth Scroll
  $('a[href*=#]').bind('click', function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });
});
$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "SHOW ALL") {
    $(this).text("SHOW LESS")
  } else {
    $(this).text("SHOW ALL")
  }
});

/* P */
$('.accordion-2a, .accordion-2b, .accordion-3').on('show.bs.collapse', function(n){
  $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-minus fa-plus');
});
$('.accordion-2a, .accordion-2b, .accordion-3').on('hide.bs.collapse', function(n){
  $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-plus fa-minus');
});


});
document.getElementById("year").innerHTML = new Date().getFullYear();

// popup js
$ = function(id) {
  return document.getElementById(id);
}

var show = function(id) {
  $(id).style.display ='block';
}
var hide = function(id) {
  $(id).style.display ='none';
}