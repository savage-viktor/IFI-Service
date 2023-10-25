import React from 'react';
import ReactDOM from 'react-dom/client';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// import ContactUs from './components/ContactUs/ContactUs';

// import SoftwareSolutions from './components/SoftwareSolutions/SoftwareSolutions';

import VendorModels from './components/VendorModels/VendorModels';

// const contact_us = ReactDOM.createRoot(document.getElementById('contact_us'));

// const software_solutions = ReactDOM.createRoot(
//   document.getElementById('software_solutions-app')
// );

const vendor_models = ReactDOM.createRoot(
  document.getElementById('vendor-models')
);

const vendorName = document
  .getElementById('vendor-models')
  .getAttribute('vendor-name');

// contact_us.render(
//   <React.StrictMode>
//     <ContactUs />
//   </React.StrictMode>
// );

// software_solutions.render(
//   <React.StrictMode>
//     <SoftwareSolutions />
//   </React.StrictMode>
// );

vendor_models.render(
  <React.StrictMode>
    <VendorModels vendorName={vendorName} />
  </React.StrictMode>
);

// Mobile menu
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const navList = document.querySelector('.site-nav__list');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    navList.classList.toggle('is-open');

    isMenuOpen
      ? enableBodyScroll(document.body)
      : disableBodyScroll(document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 651px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    navList.classList.remove('is-open');

    openMenuBtn.setAttribute('aria-expanded', false);
    enableBodyScroll(document.body);
  });
})();
