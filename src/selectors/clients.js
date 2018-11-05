import {createSelector} from 'reselect';

export const getClientList = createSelector(
    (state) => {
      return state.clients.get('list');
    },
    clientsList => clientsList.toJS(),
);

export const getEditableClient = createSelector(
    (state) => {
      return state.clients.get('editableClient');
    },
    (editableClient) => {
      return editableClient.toJS();
    },
);
export const getCurrentViewableClientId = createSelector(
    state => state.clients.get('currentViewableClientId'),
    clientId => clientId,
);
export const getCurrentViewableClient = createSelector(
    getCurrentViewableClientId,
    state => state.clients.get('list'),
    (clientId, clientsList) => {
      const foundClient = clientsList.findLast(client => client.get('id') === clientId);
      return foundClient && foundClient.toJS();
    }
);

export const getClientsSearchQuery = createSelector(
    state => state.clients,
    clientsState => clientsState.get('searchQuery'),
);
export const getFilteredClientsList = createSelector(
    getClientsSearchQuery,
    state => state.clients.get('list'),
    (searchQuerry, clientsList) =>
        clientsList.filter(client => client.valueSeq().join('').includes(searchQuerry)).toJS(),
);





