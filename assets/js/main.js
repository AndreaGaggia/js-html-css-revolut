$(function () { //document ready
  
  var slidableTabs = $('li.slidable');

  //mouse sopra le tab della nav right
  slidableTabs.mouseover(function() {
    //appare il submenu corrispondente al tab
    slidableTabs.children('.sub_menu').css('display', 'none');
    $(this).children('.sub_menu').toggle();

    //il "titolo" del tab diventa nero
    slidableTabs.children('a').removeClass('black');
    $(this).children('a').addClass('black');

    //effetti sui link dei submenu al mouseover e...
    $('.sub_menu a').mouseover(function() {
      $(this).css({
        'text-decoration': 'underline',
        'color': 'black'
      });
    });
    //...ripristino al mouseout
    $('.sub_menu a').mouseout(function() {
      $(this).css({
        'text-decoration': 'none',
        'color': 'darkgrey'
      });
    });
  });

  //clicco fuori dalla nav e torna tutto allo stato iniziale
  $(document).click(function() {
    slidableTabs.children('.sub_menu').css('display', 'none');
    slidableTabs.children('a').removeClass('black');
  })


});