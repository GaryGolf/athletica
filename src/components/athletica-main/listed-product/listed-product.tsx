import * as React from 'react';
import * as styles from './listed-product.css';

interface Tab {
  id: string;
  image: string;
  badge: string;
  title: string;
}
interface Props {
  tabs: Array<Tab>;
}
interface State {
  current: number;
}

export default class ListedProduct extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  handleVariant = (event) => {
    const element = event.currentTarget;
    event.preventDefault();
    const id = element.dataset.variantId;
    const current = this.props.tabs.findIndex(tab => tab.id === id);
    this.setState({ current });
  }

  render() {
    const variants = this.props.tabs.map((tab, idx) => (
      <a key={tab.id}
        data-variant-id={tab.id}
        className={this.state.current === idx ? styles.active : styles.variant}
        href="#"
        onClick={this.handleVariant}
        title={tab.title}
      >
        <img src={tab.badge}/>
      </a>
    ));
    
    return (
      <div className={styles.container}>
        <img src={this.props.tabs[this.state.current].image}/>
        {variants}
      </div>
    );
  }
}
