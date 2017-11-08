import * as React from 'react';
import Header from 'components/athletica-main/header';

interface Props {}
interface State {}

export default class AthleticaMain extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
  }

  render() {

    return (
      <div className="main-container transition--fade transition--active">
        <Header/>
      </div>
    );
  }
}
