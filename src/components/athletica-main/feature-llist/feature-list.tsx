import * as React from 'react';
import * as styles from './feature-list.css';
interface Props { }

export default () => {
  return (
    <div className={styles.list}>
      <ul className={styles.features}>
        <li>
          <a href="#">
            <div className={styles.image} 
              style={{ backgroundImage:'url(/img/mashable.logo.jpeg)' }}
              >_</div>
            <p className="feature-quote">“The bra gods have answered”</p>
          </a>
        </li>
        <li>
          <a href="#">
            <div className={styles.image} 
              style={{ backgroundImage:'url(/img/womens_health.logo.jpeg)' }}>
              _</div>
            <p className="feature-quote">“A product that will change your life”</p>
          </a>
        </li>
        <li>
          <a href="#">
            <div className={styles.image} 
              style={{ backgroundImage:'url(/img/shape.logo.jpeg)' }}>
            _</div>
            <p className="feature-quote">“Your new go-to”</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
