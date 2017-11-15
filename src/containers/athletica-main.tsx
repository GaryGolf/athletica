import * as React from 'react';
import { Helmet } from 'react-helmet';
import NavMenu from 'components/nav-menu';
import UtilityBar from 'components/athletica-main/header';
import FeatureList from 'components/athletica-main/feature-llist';
import Blocks from 'components/athletica-main/blocks';
import Content from 'components/athletica-main';
import Cart from 'components/cart';
import Search from 'components/search';
import Footer from 'components/footer';

interface Props {}
interface State {}

export default class AthleticaMain extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
  }

  render() {

    const title = 'The Most Comfortable Wireless & Seamless Bras & Underwear Athletica - Balance';
    const description = 'The most comfortable bras &amp; underwear that you can wear all day.' +
      'Find your bra and underwear size with wireless or padded bras and athletic underwear';
    return (
      <div className="main-container transition--fade transition--active">
        <NavMenu utilityBar={<UtilityBar/>} />
        <Search/>
        <Cart/>
        <Content.Product
          tabs={[
            {
              id: '§1230',
              image:'/img/KNX_007_ProductPage_EvolutionBra_MidnightGarden_1_1024x.jpg',
              badge:'/img/variant-color-midnight-garden-black.jpg',
              title:'Midnight Garden/Black',
            },
            {
              id: '§1231',
              image:'/img/KNX_007_ProductPage_EvolutionBra_RoseGold_1_1024x.jpg',
              badge:'/img/variant-color-rose-gold-beige.png',
              title:'Rose Gold/Beige',
            },
            {
              id: '§1232',
              image:'/img/KNX_007_ProductPage_EvolutionBra_Black_1_1024x.jpg',
              badge:'/img/variant-color-black-beige.jpg',
              title:'Black/Beige',
            },
            {
              id: '§1233',
              image:'/img/KNX_007_ProductPage_EvolutionBra_Beige_1_1024x.jpg',
              badge:'/img/variant-color-beige-grey-heather.jpg',
              title:'Beage/Grey Heather',
            },
            {
              id: '§1234',
              image:'/img/KNX_007_ProductPage_EvolutionBra_Indigo_1_1024x.jpg',
              badge:'/img/variant-color-indigo-seaport.jpg',
              title:'Indigo/Seaport',
            },
            {
              id: '§1235',
              image: '/img/KNX_007_ProductPage_EvolutionBra_HeatherGrey_1_1024x.jpg',
              badge: '/img/variant-color-grey-heather-black.jpg',
              title: 'Grey Heather/Black',
            },
          ]}
        />
        <Content.Blocks/>
        <Content.Features/>
        <Footer/>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description}/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>
          <meta property="og:image" 
            content="https://cdn.shopify.com/s/files/1/0660/0355/t/8/assets/fb_logo.png"/> 
          <meta property="og:url" content="https://www.knixwear.com/"/>
          <meta property="og:site_name" content="Knixwear"/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:title" content={title}/>
          <meta name="twitter:description" content={description}/>
          <link rel="canonical" href="https://www.knixwear.com/"/>
        </Helmet>
      </div>
    );
  }
}
