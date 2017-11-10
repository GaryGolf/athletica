import * as React from 'react';
import NavMenu from 'components/nav-menu';
import UtilityBar from 'components/athletica-main/header';
import FeatureList from 'components/athletica-main/feature-llist';
import Blocks from 'components/athletica-main/blocks';
import Content from 'components/athletica-main';

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
        <Content.Blocks/>
        <Content.Features/>
      </div>
    );
  }
}
