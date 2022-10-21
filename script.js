$(".splashScreen").delay(2700).fadeTo(500, 0);
$(".splashHeaderH1").delay(400).fadeIn(1000);
$(".splashHeaderH2").delay(400).fadeIn(1000);
$(".invisibleStart").delay(2700).fadeIn(0);

setTimeout(function () {
  $(".splashScreen").css("z-index", "-1");
}, 3200);
