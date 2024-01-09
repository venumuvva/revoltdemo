import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';

  // load footer fragment
  const footerPath = footerMeta.footer || '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
  
  block.append(footer);
}
window.addEventListener('load', function() {
    setTimeout(function() {
        // Your code goes here
        // For example:
        alert('The page has loaded and 2 seconds have passed.');
        console.log('This message will show in the console after 2 seconds of the page loading.');

        // If you need to select the footer element and manipulate it, do it here
        var footer = document.querySelector('footer');
        if (footer) {
            // Manipulate the footer as needed
        }
    }, 2000); // 2000 milliseconds equals 2 seconds
});
