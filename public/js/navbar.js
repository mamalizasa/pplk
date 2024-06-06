$(document).ready(function () {
    $('.navbar-toggler').click(function () {
      $(this).toggleClass('collapsed');
      if ($(this).hasClass('collapsed')) {
       
        $('.navbar-toggler-icon').css('background-image', 'url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'rgba(255, 255, 255, 1)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E")');
      } else {
      
        $('.navbar-toggler-icon').css('background-image', 'url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'rgba(255, 255, 255, 1)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M7 7l16 16M23 7L7 23\'/%3E%3C/svg%3E")');
      }
    });
});
  