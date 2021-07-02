$(function () {

  // ハンバーガーメニュー

  const headerMenuBottun = document.getElementById('js-drawer-button');
  const headerMenu = document.getElementById('js-drawer-menu');

  headerMenuBottun.addEventListener('click', () => {
    $('body').toggleClass('is-drawerActive');

    if (headerMenuBottun.getAttribute('aria-expanded') == 'false') {
      headerMenuBottun.setAttribute('aria-expanded', true);
      headerMenu.setAttribute('aria-hidden', false);
      $('.drawer-menu[aria-hidden="false"]').stop().slideDown(500);
    } else {
      headerMenuBottun.setAttribute('aria-expanded', false);
      headerMenu.setAttribute('aria-hidden', true);
      $('.drawer-menu[aria-hidden="true"]').stop().slideUp(500);
    }
  }, false);

  //アコーディオン

  const accordionBottun = document.getElementsByClassName('js-accordion-btn');

  for (let i = 0; i < accordionBottun.length; i++) {
    accordionBottun[i].addEventListener('click', () => {
      let clickedAccordion = accordionBottun[i].getAttribute('aria-controls');
      console.log(clickedAccordion);
  
      if (accordionBottun[i].getAttribute('aria-expanded') == 'false') {
        accordionBottun[i].setAttribute('aria-expanded', true);
        accordionBottun[i].nextElementSibling.setAttribute('aria-hidden', false);
        $('.js-accordion-details[aria-hidden="false"]').stop().slideDown(500);
      } else {
        accordionBottun[i].setAttribute('aria-expanded', false);
        accordionBottun[i].nextElementSibling.setAttribute('aria-hidden', true);
        $('.js-accordion-details[aria-hidden="true"]').stop().slideUp(500);
      }
    }, false);
  }

});