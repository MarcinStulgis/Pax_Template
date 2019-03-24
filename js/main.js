$(document).ready(function () {

   // Slider 
   $('.slides').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: true
   });
   // Smooth scroll
   $('.menu-items a').smoothScroll({
      offset: -90,
      afterScroll: function () {
         $(this).closest('.menu-items').find('a').removeClass('active');
         $(this).addClass('active');
      }
   });
//
   $(document).ready(function(){
      $(".burger-nav").on("click", function(){
         $(".page-header nav ul").toggleClass("open");
      });
   });

});
