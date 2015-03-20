$(function(){

  //delete focus on button input a
  $("button, a, select").focus(function(){
  this.blur();
  });

  //hightlight active menu
  $("#inner a:contains('пользователи')").addClass('active-menu');
  $('li.dropdown').hover(
  function(){
    $(this).addClass("active-dropdown").stop(true,true);
  },
  function(){
    $(this).removeClass("open");
    $(this).removeClass("active-dropdown");
    $(this).find('.navbar-nav__links').css({
      'background' : 'none',
      'color': 'rgba(255, 255, 255, 0.55)'
    });
  });//hover
});//jQuery is loaded
$(document).ready( function() {
	$("#immersive_slider").immersive_slider({
	  container: ".main",
	  animation: "bounce",
	  autoStart: 5000
	});
 });
$(function(ev){
  var owl = $(".b-carousel__slied")
  owl.owlCarousel({
    items : 4,
    autoHeight : true,
    autoPlay : 5000,
    pagination : true,
    stopOnHover: true,
    addClassActive : true,
    itemsTablet: [768, 3]
  });

  $('#custom_carousel').on('slide.bs.carousel', function (evt) {
  $('#custom_carousel .controls .b-carousel .owl-item div.active')
  .removeClass('active').find('.BWFilter').css('display','block');
  var logoActive = $('#custom_carousel .controls .b-carousel .owl-item div:eq('+$(evt.relatedTarget).index()+')')
  .addClass('active');
  logoActive.find('.BWFilter').css('display','none');
  });
});

$(window).load(function(){
    $('.bwWrapper').BlackAndWhite({
        hoverEffect : true, // default true
        // set the path to BnWWorker.js for a superfast implementation
        webworkerPath : false,
        // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
        intensity:1,
        speed: { //this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 200, // 200ms for fadeIn animations
            fadeOut: 800 // 800ms for fadeOut animations
        }
    });
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
