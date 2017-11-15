import * as React from 'react';
const { connect } = require('react-redux');
import * as styles from './social-list.css';
import { ShareButtons } from 'react-share';
import { Helmet } from 'react-helmet';

interface State {
  title: string;
  description: string;
  media: string;
  url: string;
}
interface Props {
  social?: ISocial;
}

@connect(
  store => ({
    social: store.app.appConfig.social as ISocial,
  }),
)
export default class SocialList extends React.Component <Props, State> {

  private url: any;
  private description: string;
  constructor(props:Props) {
    super(props);
    this.state = {
      title: 'Athletica - Balance',
      description: 'Athletica - Balance',
      media: 'https://cdn.shopify.com/s/files/1/0660/0355/t/8/assets/fb_logo.png',
      url: window.location.href,
    };
  }
  
  componentDidMount() {
    const title = this.getMetaData('og:title') || this.state.title;
    const description = this.getMetaData('og:description') || this.state.description;
    const media = this.getMetaData('og:image') || this.state.media;
    const url = this.getMetaData('og:url') || this.state.url;
    this.setState({ title, description, media, url }); 
  }

  getMetaData(property: string):string {
    const data = Helmet.peek();
    if (!data) return null;
    const meta = data['metaTags'].find(item => item.property === property);
    if (!!meta && !!meta.content) return meta.content;
    return null;
  }

  getSocialIcon = (name: string):JSX.Element => {
    const { FacebookShareButton, TwitterShareButton, PinterestShareButton,
      TumblrShareButton } = ShareButtons;
    const { title, description, media, url } = this.state;
    switch (name) {

      case 'FacebookURL' :
        return (
          <FacebookShareButton className={styles.button} quote={description} url={url}>
            <span className={styles.facebook}/>
          </FacebookShareButton>
        );

      case 'TwitterURL' :
        return (
          <TwitterShareButton className={styles.button} title={title} url={url}>
            <span className={styles.twitter}/>
          </TwitterShareButton>
        );

      case 'PinterestURL' :
        return (
          <PinterestShareButton className={styles.button} media={media} description={description} url={url}>
            <span className={styles.pinterest}/>
           </PinterestShareButton>  
        );
        
      case 'TumblrURL' :
        return (
          <TumblrShareButton className={styles.button} title={title} caption={description} url={url}>
            <span className={styles.tumblr}/>
          </TumblrShareButton>
        );

      case 'InstagramURL' :
        return <span className={styles.instagram}/>;
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
