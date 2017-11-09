import * as React from 'react';
import NavMenu from 'components/nav-menu';
import UtilityBar from 'components/athletica-main/header';

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
        
      </div>
    );
  }
}
