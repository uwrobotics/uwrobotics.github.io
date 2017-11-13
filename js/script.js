// Inserts contents of navigation.html
$.get("navigation.html", function(data){
  $("#nav-placeholder").replaceWith(data);
});

// Inserts contents of footer.html
$.get("footer.html", function(data){
  $("#footer-placeholder").replaceWith(data);
});
