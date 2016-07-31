$(".nav li").on("click", function(){
  $(".nav li").removeClass("active");
  $(this).addClass("active");
});

$('.carousel').carousel({pause: true});
