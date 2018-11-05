// UUID генерит уникальные индификаторы
import {fromJS} from 'immutable';
import UUID from 'uuid/v4';

import {
  CLIENTS_ADD_CLIENT,
  CLIENTS_UPDATE_EDITABLE_CLIENT,
  CLIENTS_RESET_EDITABLE_CLIENT,
  CLIENTS_SET_EDITABLE_CLIENT_BY_ID,
  CLIENTS_SET_VIEWABLE_CLIENT_BY_ID,
  CLIENTS_FETCH_SUCCESS,
  CLIENTS_UPDATE_SEARCH_QUERY,
  CLIENTS_UPDARE_BY_ID
} from "../actions/clients";

// изначальное состояние
const initialState = fromJS({
  list: [],
  editableClient: {
    id: null,
    email: '',
  },
  currentViewableClientId: null,
  searchQuery: '',
})
// всегда будет изначально лежать пустой массив
// ...action.payload передаем данные о клиентекакие то данные которые ходят с action
export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENTS_ADD_CLIENT: {
      return state.updateIn(['list'], (list) => {
        return list.push(fromJS(action.payload).set('id', UUID()))
      });
      //  без Immutable
      //   return {
      //     ...state,
      //     list: [...state.list,
      //       {
      //         ...action.payload,
      //         id: UUID(),
      //       },
      //     ],
      //   };
    }

    case CLIENTS_UPDATE_EDITABLE_CLIENT: {
      return state.mergeIn(['editableClient'], fromJS(action.payload));
      //  без Immutable
      //   return {
      //   ...state,
      //   editableClient: {
      //     ...state.editableClient,
      //     ...action.payload,
      //   },
      // };
    }
    case CLIENTS_RESET_EDITABLE_CLIENT: {
      return state.set('editableClient', initialState.get('editableClient'));
      //  без Immutable
      // return {
      //   ...state,
      //   editableClient:{
      //       ...initialState.editableClient,
      //   } ,
      // };
    }
    case CLIENTS_SET_EDITABLE_CLIENT_BY_ID: {
      const editableClient = state
          .get('list')
          .findLast(client => client.get('id') === action.payload);
      return state.set('editableClient', editableClient)
      //  без Immutable
      // const [client] = state.list.filter(clientEntry => clientEntry.id ===action.payload);
      // return {
      //     ...state,
      //   editableClient:{
      //       ...client
      //   },
      // };
    }
    case CLIENTS_SET_VIEWABLE_CLIENT_BY_ID: {
      return state.set('currentViewableClientId', action.payload);
    }
    case CLIENTS_FETCH_SUCCESS: {
      return state.set('list', fromJS(action.payload));
    }
    case CLIENTS_UPDATE_SEARCH_QUERY: {
      return state.set('searchQuery', action.payload);
    }
    case CLIENTS_UPDARE_BY_ID: {
      return state.updateIn(['list'], (list) =>{
        return list.map((client) =>{
          if (client.get('id')===action.payload.id){
            return fromJS(action.payload);
          }
          return client;
        })
      });
    }


    default: {
      return state;
    }
  }
};
