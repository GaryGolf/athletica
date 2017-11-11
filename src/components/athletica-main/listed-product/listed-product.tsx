import * as React from 'react';
import * as styles from './listed-product.css';

interface Tab {
  image: string;
  badge: string;
  title: string;
}
interface Props {
  tabs: Array<Tab>
}
interface State {}

export default class ListedProduct extends React.PureComponent <Props, State> {
  render() {
    const variants = this.props.tabs.map((tab,idx) => (
      <a key={idx}
        className={styles.variant}
        href="#"
        title={tab.title}
      >
        <img src={tab.badge}/>
      </a>
    ));

    console.log(this.props.tabs);
    return (
      <div className={styles.container}>
      {variants}
      </div>
    );
  }
}