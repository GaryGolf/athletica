import * as React from 'react';
const { connect } = require('react-redux');
import * as styles from './social-list.css';
import { ShareButtons } from 'react-share';

interface State {}
interface Props {
  social?: ISocial;
}

@connect(
  store => ({
    social: store.app.appConfig.social as ISocial,
  }),
)
export default class SocialList extends React.Component <Props, State> {

  constructor(props:Props) {
    super(props);
  }

  getSocialIcon = (name: string):JSX.Element => {
    const { FacebookShareButton } = ShareButtons;
    switch (name) {
      case 'FacebookURL' :
        // return 'socicon-facebook';
        return (
          <FacebookShareButton
            className={styles.button}
            quote={'Some text'}
            url={'http://maxim.com'}>
            <span className={styles.facebook}/>
          </FacebookShareButton>
        );
      case 'TwitterURL' :
        return <span className={styles.twitter}/>;
        // return 'socicon-twitter';
      case 'PinterestURL' :
        return <span className={styles.pinterest}/>;
        // return 'socicon-pinterest';
      case 'InstagramURL' :
        return <span className={styles.instagram}/>;
        // return 'socicon-instagram';
      case 'TumblrURL' :
        return <span className={styles.tumblr}/>;
      case 'YouTubeURL' :
        return <span className={'socicon-youtube'}/>;
      case 'LinkedInURL' :
        return <span className={'socicon-linkedin'}/>;
      case 'FlickrURL' :
        return <span className={'socicon-flickr'}/>;
      case 'TripAdvisorURL' :
        return <span className={'socicon-tripadvisor'}/>;
      case 'VimeoURL' :
        return <span className={'socicon-vimeo'}/>;
      case 'GooglePlusURL' :
        return <span className={'socicon-googleplus'}/>;
      default :
        return null;
    }
  }

  render() {
    const { social } = this.props;
    if (!social) return null;
    
    const icons = Object.keys(social)
      .map((item:string, idx) => {
        const icon = this.getSocialIcon(item);
        if (!icon) return null;

        return (
          <li key={idx}>
            <a href={social[item]}>
              {icon}
            </a>
          </li>
        );
      });

    return(
      <ul className="social-list">
        {icons}
      </ul>
    );
  }
}
