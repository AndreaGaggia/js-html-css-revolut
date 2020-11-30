$(function () {
  
  var slidableTabs = $('li.slidable');

  slidableTabs.mouseover(function() {
    slidableTabs.children('ul').css('display', 'none');
    $(this).children('ul').toggle();
  });

  $(document).click(function() {
    slidableTabs.children('ul').css('display', 'none');
  })






  




















});