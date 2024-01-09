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
   var footerHTML = `
        <style>
            .footer-container {
                background-color: black;
                color: white;
                display: flex;
                justify-content: space-around;
                padding: 20px;
                flex-wrap: wrap;
            }
            .footer-section {
                flex: 1;
                min-width: 150px;
            }
            .footer-section h4 {
                color: #fff;
            }
            .footer-section ul {
                list-style-type: none;
                padding: 0;
            }
            .footer-section ul li a {
                color: #ccc;
                text-decoration: none;
                transition: color 0.3s;
            }
            .footer-section ul li a:hover {
                color: #fff;
            }
            .footer-bottom {
                text-align: center;
                margin-top: 20px;
                border-top: 1px solid #444;
                padding-top: 20px;
            }
        </style>
        <div class="footer-container">
            <div class="footer-section">
                <h4>About Us</h4>
                <ul>
                    <li><a href="/about">Who We Are</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Services</h4>
                <ul>
                    <li><a href="/services/1">Service One</a></li>
                    <li><a href="/services/2">Service Two</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://facebook.com">Facebook</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Legal</h4>
                <ul>
                    <li><a href="/terms">Terms of Use</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Your Company Name</p>
            </div>
        </div>
    `;

    var footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = footerHTML;
    }
}
