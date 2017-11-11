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
  render() {
    const variants = this.props.tabs.map((tab,idx) => (
      <a key={idx}
        className={this.state.current === idx ? styles.active : styles.variant}
        href="#"
        onClick={e => this.setState({ current:idx })}
        title={tab.title}
      >
        <img src={tab.badge}/>
      </a>
    ));

    console.log(this.props.tabs);
    return (
      <div className={styles.container}>
      <img src={this.props.tabs[this.state.current].image}/>
      {variants}
      </div>
    );
  }
}