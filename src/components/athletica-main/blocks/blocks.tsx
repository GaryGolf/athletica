import * as React from 'react';
import * as styles from './blocks.css';

interface Props { }

export default () => {
  return (
    <div className="blocks-wrapper blocks-count-4">
      <ul className={styles.blocks}>
        <li>
          <div className={styles.image1} />
          <div className={styles.clearfix}></div>
          <div className={styles.content}>
            <div className={styles.title}>Build a Set</div>
            <p> Not sure where to get started? Build a bundle of Knix favorites and save. </p>
            <a href="https://www.knixwear.com/pages/build-a-set" className={styles.button}>
              build a set
            </a>
          </div>
        </li>
        <li>
          <div className={styles.image2} />
          <div className={styles.clearfix}></div>
          <div className={styles.content}>
            <div className={styles.title}>30 day wash &amp; wear guarantee</div>
            <p> 
              Take your bra from yoga to the office or even on a weekend adventure! 
              If the fit still isn't right, we'll get you in the right size. 
            </p>
            <a href="https://www.knixwear.com/collections/bras" className={styles.button}>
              shop bras
            </a>
          </div>
        </li>
        <li>
          <div className={styles.image3} />
          <div className={styles.clearfix}></div>
          <div className={styles.content}>
            <div className={styles.title}>Find your size</div>
            <p> View our bra and underwear size charts to find your perfect fit. </p>
            <a href="https://www.knixwear.com/pages/bra-size-chart" className={styles.button}>
              Find My Size
            </a>
          </div>
        </li>
        <li>
          <div className={styles.image2} />
          <div className={styles.clearfix}></div>
          <div className={styles.content}>
            <div className={styles.title}>Our Innovations</div>
            <p> See what happens when performance meets design </p>
            <a href="https://www.knixwear.com/pages/technology" className={styles.button}>
              Discover
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
