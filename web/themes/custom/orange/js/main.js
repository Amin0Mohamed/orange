$ = jQuery;
$('#portfolio .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        600:{
            items:3
        },
        900:{
            items:4
        }
    }
});

//************************start slider*******************
$('#slider .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  dots:false,
  mouseDrag:true,
  lazyLoad:true,
  nav:false,
  responsive:{
    0:{
      items:1
    }
  }
});
//************************end slider*******************
//***************start loading page*******************************
function load() {
  var load = document.getElementById("load");
  load.style.visibility = "hidden";
  // alert("hidden")
}


//***************start scroll up*******************************


$(document).ready(function(){

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 3000) {
      $('#myBtn').fadeIn();
    } else {
      $('#myBtn').fadeOut();
    }
  });

  //Click event to scroll to top
  $('#myBtn').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

});

//***************start nav scroll*******************************
window.onscroll = function() {scroll_nave()};

function scroll_nave() {
  if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
    document.getElementById("nav").style.backgroundColor="rgba(255,255,255,1)";
  } else {
    document.getElementById("nav").style.backgroundColor="rgba(255,255,255,0.79)";
  }
}
//***************end nav scroll*******************************
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop':  parseInt($target.offset().top,10)
    });
  });
});


