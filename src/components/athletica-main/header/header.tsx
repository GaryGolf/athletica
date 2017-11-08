import * as React from 'react';
import Banner from './banner';
import * as styles from './header.css';

interface Props {}
interface State {}

export default class Header extends React.PureComponent <Props, State> {
  render() {
    return (
      <header className={styles.header}>
        <Banner/>
      </header>
    );
  }
}
