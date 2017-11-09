import * as React from 'react';
import * as styles from './utility-bar.css';

interface Props { }

const UtilityBar: React.StatelessComponent<Props> = ({ }) => {
  styles.content += ' text-uppercase';
  return (
    <div className="utility-bar bg--secondary">
      <div className={styles.content}>
        <div className={styles.origin}>
          <div className={styles.usa}>
            <a href="https://www.knixwear.ca/" target="_blank">
              United States - US$
            </a>
          </div>
          <div className={styles.canada}>
            <a href="https://www.knixwear.ca/" target="_blank">
              Canada - CA$ 
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <a href="https://knixwear.returnly.com/" target="_blank">
            30-Day Bra Wash &amp; Wear Guarantee
          </a>
        </div>
        <div className={styles.text}>
          Free shipping on orders over $85
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
