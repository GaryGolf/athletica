import * as React from 'react';
import * as styles from './blocks.css';

interface Props { }

export default (props: Props) => {
  styles.image0 += ' imageblock__content col-lg-5 col-sm-10 col-xs-12';
  styles.image1 += ' imageblock__content col-lg-5 col-sm-10 col-xs-12';
  styles.image2 += ' imageblock__content col-lg-5 col-sm-10 col-xs-12';
  styles.image3 += ' imageblock__content col-lg-5 col-sm-10 col-xs-12';

  return (
  <section className="bg-white" >
    <div className="row justify-content-center align-items-center">
      <div className={styles.image0}/>
      <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12 text-center py-5">
        <h4 className="text-uppercase">Build a set</h4>
        <p>
          Not sure where to get started? <br/>Build a bundle of Knix favorites and save.
        </p>
        <a href="#" className="btn btn-white"> Build a set</a>
      </div>
      <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12 text-center py-5">
        <h4 className="text-uppercase">30 day wash & wear guarantee</h4>
        <p>
          Take your bra from yoga to the <br/>
          office or even on a weekend <br/>
          adventure! If the fit still isn't right, <br/>
          we'll get you in the right size.
        </p>
        <a href="#" className="btn btn-white">Shop Bras</a>
      </div>
      <div className={styles.image1}/>
      <div className={styles.image2}/>
      <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12 text-center py-5">
        <h4 className="text-uppercase">Find Your Size</h4>
        <p>
          View our bra and underwear size <br/>charts to find your perfect fit.
        </p>
        <a href="#" className="btn btn-white">Find Your Size</a>
      </div>
      <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12 text-center py-5">
        <h4 className="text-uppercase">Our Innovations</h4>
        <p>
          See what happens when <br/>
          performance meets design
        </p>
        <a href="#" className="btn btn-white">Discover</a>
      </div>
      <div className={styles.image3}/>
    </div>
  </section>
  );
}
