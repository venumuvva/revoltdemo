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

console.log('Current readyState:', document.readyState);
if (document.readyState === 'complete') {
    console.log('Document is already complete. Running the code immediately.');
    setTimeout(afterLoad, 1500);
} else {
    console.log('Document is not complete. Setting load event listener.');
    window.addEventListener('load', function() {
        console.log('Load event fired. Running the code after a delay.');
        setTimeout(afterLoad, 1500);
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
                font-family: Arial, sans-serif;
            }
            .footer-column {
                display: flex;
                flex-direction: column;
                min-width: 150px;
                margin: 0 10px;
            }
            .footer-column h4 {
                color: #fff;
                margin-bottom: 15px;
            }
            .footer-column ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
            }
            .footer-column ul li a {
                color: #ccc;
                text-decoration: none;
                transition: color 0.3s;
                margin-bottom: 8px;
                display: block;
            }
            .footer-column ul li a:hover {
                color: #fff;
            }
            .footer-icons {
                display: flex;
                align-items: center;
            }
            .footer-icons a {
                color: #ccc;
                margin: 0 5px;
                transition: color 0.3s;
            }
            .footer-icons a:hover {
                color: #fff;
            }
            .footer-bottom {
                text-align: center;
                width: 100%;
                margin-top: 20px;
                padding-top: 20px;
                font-size: 14px;
                border-top: 1px solid #333;
            }
        </style>
        <div class="footer-container">
            <div class="footer-column">
                <h4>TERMS AND POLICY</h4>
                <ul>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Notice</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">California Notice at Collection</a></li>
                    <li><a href="#">Privacy Preferences</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>ASK US</h4>
                <ul>
                    <li><a href="#">Text REVOLT</a></li>
                    <li><a href="#">Email REVOLT</a></li>
                    <li><a href="#">Send us a tip</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>JOIN US</h4>
                <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Masthead</a></li>
                    <li><a href="#">Media Kit</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>FIND US ON</h4>
                <div class="footer-icons">
                    <a href="https://tiktok.com" target="_blank"><i class="fab fa-tiktok"></i></a>
                    <a href="https://snapchat.com" target="_blank"><i class="fab fa-snapchat-ghost"></i></a>
                    <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 REVOLT TV ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    `;

    var footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = footerHTML;
    }
}
