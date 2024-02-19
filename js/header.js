$(document).ready(function(){
  $('header').mouseenter(function(){
    $(this).addClass('on');
    $('.nav-list').find('a').addClass('on');
  })
  $('header').mouseleave(function(){
    if($(window).scrollTop() < 50){
      $(this).removeClass('on');
      $('.nav-list').find('a').removeClass('on');
    }
    
  }
  )
  $(window).resize(function(){
    if($(window).width() > 1024){
      $('.nav-list > a').removeClass('change');
      $('header').mouseenter(function(){
        $(this).addClass('on');
        $('.nav-list').find('a').addClass('on');
      })
      $('header').mouseleave(function(){
        if($(window).scrollTop() < 50){
          $(this).removeClass('on');
          $('.nav-list').find('a').removeClass('on');
        }
        
      }
      )
        
    }else{
      $('.nav-list > a').addClass('change');
    }
    
  })
  $('.mb-nav').click(function(){
    $('.pc-nav').toggleClass('on');
  })
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('header').addClass('on');
      $('.nav-list').find('a').addClass('on');
    }else{
      $('header').removeClass('on');
      $('.nav-list').find('a').removeClass('on');
    }
  })
  


  $('.approach > div').mouseenter(function(){
    $(this).find('.app-txt').addClass('on');
  })
  $('.approach > div').mouseleave(function(){
    $(this).find('.app-txt').removeClass('on');
  })
})