$(function () {
  
  var slidableTabs = $('li.slidable');

  slidableTabs.mouseover(function() {
    $(this).children('ul').css('display', 'block');
  });

  slidableTabs.mouseout(function() {
    $(this).children('ul').css('display', 'none');
  });





  




















});