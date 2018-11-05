import React from 'react';
import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';

import * as clientAction from '../../actions/clients';

import ClientForm from '../ClientForm';
import ClientsList from '../ClientsList';
import ClientProfile from '../ClientProfile';
import ClientSearchContainer from '../ClientSearchContainer';

import './style.scss';

const enhance = compose(
    connect(null, clientAction),
    lifecycle({
      componentDidMount() {
        const {fetchClientList} = this.props;
        fetchClientList();
      },
    }),
);

const App = () => (
    <div className="App">
      <h1>Welcome</h1>
      <div className="App-form">
        <ClientForm/>
      </div>
      <ClientSearchContainer />
      <div className="App-content">
        <div className="App-clientList">
          <ClientsList/>
        </div>
        <div className="App-clientProfile">
          <ClientProfile/>
        </div>
      </div>
    </div>
);

export default enhance(App);
