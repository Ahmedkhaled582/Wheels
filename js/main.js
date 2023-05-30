const header = document.querySelector(".navbar");
const fixed = "fixed";
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");
window.addEventListener("scroll" , ()=>{
  const currentscroll = window.pageYOffset
  if (currentscroll > 150){
    header.classList.add(fixed)
    logo1.style.display="none"
    logo2.style.display="block"
    
  } else{
    header.classList.remove(fixed)
    logo1.style.display="block"
    logo2.style.display="none"
  }
})



$(function () {
  setInterval(function () {
      $(".home .overlay-bg").fadeOut("fast", function () {
          $(this).css("background-image", "url(img/bg-8-1.jpg)");
          $(this).delay(500).fadeIn("fast");
      });
  }, 1000);
});




$(function(){
    $(".before-after-car-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.7});
});



$('.color-variation-slider').owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:6000,
    margin:0,
    items : 1,
    nav: false,
    dots: true,
    animateIn: 'fadeIn',
    responsiveClass:true
});
$('.color-variation-slider .owl-item:not(.cloned)').each(function(e){
    var colorCode = $(this).find('.item').data('color');
    $('.color-variation-slider .owl-dots .owl-dot').eq(e).addClass(colorCode);
});



$(".start-engine").on("click", function(e){
  const audio = document.getElementById("audio");
  audio.play();
  $('.animate').addClass("animate__tada");
  setTimeout(function(){
      $('.animate').removeClass("animate__tada")
  }, 2500);
});