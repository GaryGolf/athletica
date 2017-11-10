import * as React from 'react';
import * as styles from './blocks.css';

interface Props { }

export default () => {
  return (
    <div className="blocks-wrapper blocks-count-4">
      <ul className={styles.}>
        <li>
          <div className="block-image adaptive-bg" 
         
          </div>
          <div className="clearfix"></div>
          <div className="block-contents">
            <div className="block-title">Build a Set</div>
            <p> Not sure where to get started? Build a bundle of Knix favorites and save. </p>
            <a href="https://www.knixwear.com/pages/build-a-set" className="btn btn-cta">build a set</a>
          </div>
        </li>
        <li>
          <div className="block-image adaptive-bg" 
         
          </div>
          <div className="clearfix"></div>
          <div className="block-contents">
            <div className="block-title">30 day wash &amp; wear guarantee</div>
            <p> Take your bra from yoga to the office or even on a weekend adventure! If the fit still isn't right, we'll get you in the right size. </p>
            <a href="https://www.knixwear.com/collections/bras" className="btn btn-cta">shop bras</a>
          </div>
        </li>
        <li>
          <div className="block-image adaptive-bg" 
          
          </div>
          <div className="clearfix"></div>
          <div className="block-contents">
            <div className="block-title">Find your size</div>
            <p> View our bra and underwear size charts to find your perfect fit. </p>
            <a href="https://www.knixwear.com/pages/bra-size-chart" className="btn btn-cta">Find My Size</a>
          </div>
        </li>
        <li>
          <div className="block-image adaptive-bg" style="background-image: url(&quot;https://res.cloudinary.com/knixwear/image/fetch/w_2000/https://cdn.shopify.com/s/files/1/0660/0355/t/8/assets/home_blocks_3_image%3F13741470752517398311&quot;);" data-src-xs="https://res.cloudinary.com/knixwear/image/fetch/w_640/https://cdn.shopify.com/s/files/1/0660/0355/t/8/assets/home_blocks_3_image%3F13741470752517398311" data-src-sm="https://res.cloudinary.com/knixwear/image/fetch/w_1024/https://cdn.shopify.com/s/files/1/0660/0355/t/8/assets/home_blocks_3_image%3F13741470752517398311" data-src-md="https://res.cloudinary.com/knixwear/image/fetch/w_1440/https://cdn.shopify.com/s/files/1/0660/0355/t/8/assets/home_blocks_3_image%3F13741470752517398311" data-src-lg="https://res.cloudinary.com/knixwear/image/fetch/w_2000/https://cdn.shopify.com/s/files/1/0660/0355/t/8/assets/home_blocks_3_image%3F13741470752517398311"></div>
          <div className="clearfix"></div>
          <div className="block-contents">
            <div className="block-title">Our Innovations</div>
            <p> See what happens when performance meets design </p>
            <a href="https://www.knixwear.com/pages/technology" class="btn btn-cta">Discover</a>
          </div>
        </li>
      </ul>
    </div>
  );
};
