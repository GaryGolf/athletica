import * as React from 'react';
import * as styles from './header.css';

interface Props { }
interface State { }

export default class Banner extends React.PureComponent <Props, State> {
  render() {
    return (
      <div className={styles.banner}>
        <div className="banner-content">
          <ul className="nav nav-shop">
            <li className="current usa">
              <a href="#">United States - US$  <span className="fa fa-angle-down"></span></a>
            </li>
            <li className="canada">
              <a href="https://www.knixwear.ca/" target="_blank">Canada - CA$ </a>
            </li>
          </ul>
          <div className="banner-right">
            <a href="https://knixwear.returnly.com/" target="_blank">
              30-Day Bra Wash &amp; Wear Guarantee
            </a>
          </div>
          <div className="banner-text">Free shipping on orders over $85</div>
        </div>
      </div>
    );
  }
}