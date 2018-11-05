import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import Search from '../component/Search';
import * as clientActions from '../actions/clients';
import {getClientsSearchQuery} from "../selectors/clients";

const enhance = compose(
    connect(state => ({
          searchQuery: getClientsSearchQuery(state),
        }),
        dispatch => ({
          onSearchSubmit: (event) => {
            event.preventDefault();
            dispatch(clientActions.applyClientSearch());
          },
          onSearchChange: ({target}) => {
            dispatch(clientActions.updateClientsSearchQuerry(target.value));
          },
        }),
    ),
);

const ClientSearchContainer = (props) => {
  return <Search {...props} />
};
export default enhance(ClientSearchContainer);