(function () {
  $('#js-drawer-button').on('click', function () {
    $('body').toggleClass('is-drawerActive');

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
      $('#js-drawer-menu').attr('aria-hidden', false);
      $('.drawer-menu[aria-hidden="false"]').stop().slideDown(500);
    } else {
      $(this).attr('aria-expanded', false);
      $('#js-drawer-menu').attr('aria-hidden', true);
      $('.drawer-menu[aria-hidden="true"]').stop().slideUp(500);
    }
  });
}) ();