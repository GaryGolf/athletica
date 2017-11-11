import * as React from 'react';
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

    return (
      <div className="main-container transition--fade transition--active">
        <NavMenu utilityBar={<UtilityBar/>} />
        <Search/>
        <Cart/>
        <Content.Product
          tabs={[
            {
              image:'/img/KNX_007_ProductPage_EvolutionBra_MidnightGarden_1_1024x.jpg',
              badge:'/img/variant-color-midnight-garden-black.jpg',
              title:'Midnight Garden/Black'
            },
            {
              image:'/img/KNX_007_ProductPage_EvolutionBra_RoseGold_1_1024x.jpg',
              badge:'/img/variant-color-rose-gold-beige.png',
              title:'Rose Gold/Beige'
            },
            {
              image:'/img/KNX_007_ProductPage_EvolutionBra_Black_1_1024x.jpg',
              badge:'/img/variant-color-black-beige.jpg',
              title:'Black/Beige'
            },
            {
              image:'/img/KNX_007_ProductPage_EvolutionBra_Beige_1_1024x.jpg',
              badge:'/img/variant-color-beige-grey-heather.jpg',
              title:'Beage/Grey Heather'
            },
            {
              image:'/img/KNX_007_ProductPage_EvolutionBra_Indigo_1_1024x.jpg',
              badge:'/img/variant-color-indigo-seaport.jpg',
              title:'Indigo/Seaport'
            },
            {
              image: '/img/KNX_007_ProductPage_EvolutionBra_HeatherGrey_1_1024x.jpg',
              badge: '/img/variant-color-grey-heather-black.jpg',
              title: 'Grey Heather/Black'
            }
          ]}
        />
        <Content.Blocks/>
        <Content.Features/>
        <Footer/>
      </div>
    );
  }
}
