$(document).ready(function(){
  $('#btn').on('click', function(){
    $('.bottom').slideToggle(300, function(){
      $(this).toggleClass('show');
      if(!$(this).hasClass('show')){
          var text = "Learn More About Me";
      } else {
          var text = "Close";
      }
      $('#btn').text(text);      
    });
  });

  $('#next').on('click', function(){
    var $currCat = $('.gif').find('.on');
    var $nextCat = $currCat.next();

    if($nextCat.attr('src') === undefined){
      $nextCat = $('.gif img').first();
    }

    $currCat.animate({
      opacity: 0.25,
      left: "+=150",
    }, 500, function(){
      $currCat.removeClass('on').css({
        opacity: 1,
        left: "0",
      });
      $nextCat.addClass('on');
    });
  });

  $('#prev').on('click', function(){
    var $currCat = $('.gif').find('.on');
    var $nextCat = $currCat.prev();

    if($nextCat.attr('src') === undefined){
      $nextCat = $('.gif img').last();
    }

    $currCat.animate({
      opacity: 0.25,
      left: "-=150",
    }, 500, function(){
      $currCat.removeClass('on').css({
        opacity: 1,
        left: "0",
      });
      $nextCat.addClass('on');
    });
  });
});