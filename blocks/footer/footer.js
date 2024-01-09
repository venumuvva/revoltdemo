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
}console.log('Current readyState:', document.readyState);
if (document.readyState === 'complete') {
    console.log('Document is already complete. Running the code immediately.');
    setTimeout(afterLoad, 2000);
} else {
    console.log('Document is not complete. Setting load event listener.');
    window.addEventListener('load', function() {
        console.log('Load event fired. Running the code after a delay.');
        setTimeout(afterLoad, 2000);
    });
}

function afterLoad() {
    console.log('Running afterLoad function.');
    // Your code to manipulate the footer goes here
}
