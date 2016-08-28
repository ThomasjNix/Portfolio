$(".nav li").on("click", function(){
  $(".nav li").removeClass("active");
  $(this).addClass("active");
});

$('.carousel').carousel({pause: true});



$('.panel-primary').on('click', function(){
    $(this).find('.accordian-collapse-icon').toggleClass('glyphicon-arrow-down');
    $(this).find('.accordian-collapse-icon').toggleClass('glyphicon-arrow-up');
});
