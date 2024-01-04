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
   
    const footerHTML = `
    <footer style="background-color: black; color: white; padding: 20px; text-align: center;">
        <div>TERMS AND POLICY</div>
        <div>ASK US</div>
        <div>JOIN US ON</div>
        <div>
            <p>Terms of Use</p>
            <p>Privacy Notice</p>
            <p>Cookie Policy</p>
            <p>California Notice at Collection</p>
            <p>Privacy Preferences</p>
        </div>
        <div>
            <p>Text REVOLT</p>
            <p>Email REVOLT</p>
            <p>Send us a tip</p>
        </div>
        <div>
            <p>Careers</p>
            <p>Masthead</p>
            <p>Media Kit</p>
        </div>
        <div>&copy; 2024 REVOLT TV RIGHTS RESERVED.</div>
    </footer>
    `;
document.getElementsByClassName("footer-wrapper").innerHTML = "Hello";
   
 
