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
document.addEventListener("DOMContentLoaded", function() {
  alert(1);
  // Select the footer element
  var footer = document.querySelector('footer');

  // Check if the footer exists
  if (footer) {
    // Manipulate the footer as needed, for example:
    // Clear current content
    footer.innerHTML = '';

    // Add new content
    var newContent = document.createElement('div');
    newContent.innerHTML = '<p>New Footer Content Here</p>';
    footer.appendChild(newContent);

    // Add class names, styles, or other attributes
    newContent.className = 'new-footer-class';
  }
});

