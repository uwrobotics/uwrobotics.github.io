// Inserts contents of navigation.html
$.get("navigation.html", function(data){
  $("#nav-placeholder").replaceWith(data);
});

// Inserts contents of footer.html
$.get("footer.html", function(data){
  $("#footer-placeholder").replaceWith(data);
});

//Initializes Slick slider
$(document).ready(function(){
  $('.news-carousel').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: true,
    mobileFirst: true,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});
