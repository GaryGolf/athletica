import * as React from 'react';
import * as styles from './header.css';

interface Props { }
interface State { }

export default class Banner extends React.PureComponent <Props, State> {
  render() {
    return (
      <div className={styles.banner}>
        <div className={styles.content}>

          <div className={styles.side}>
            <a href="https://knixwear.returnly.com/" target="_blank">
              30-Day Bra Wash &amp; Wear Guarantee
            </a>
          </div>

          <div>Free shipping on orders over $85</div>

          <div className={styles.side}>
              <a href="#">United States - US$</a>
          </div>
    
        </div>
      </div>
    );
  }
}