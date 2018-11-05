import React from 'react';
// import PropTypes from 'prop-types';
import {branch, renderNothing, compose} from 'recompose';
import  {connect} from 'react-redux';

import clientShape from '../../shapes/clients';
import {getCurrentViewableClient} from "../../selectors/clients";


const enhance = compose(
    connect(store => ({
      client: getCurrentViewableClient(store),
    })),
    branch(({ client })=> typeof client === 'undefined', renderNothing),
)

const ClientProfile = ({client:{id, email} }) =>(
    <dl className = "ClientProfile">
    <dt>Client ID </dt>
    <dd>{id} </dd>
    <dt>Email </dt>
    <dd>{email} </dd>
  </dl>
);
ClientProfile.propTypes = {
  client:  clientShape.isRequired,
  // id: PropTypes.string,
}
export  default enhance(ClientProfile);

// export  default branch(({client}) =>  typeof  client === 'undefined', renderNothing) (ClientProfile);

// так делать нельзя
// ClientProfile.PropTypes = clientShape