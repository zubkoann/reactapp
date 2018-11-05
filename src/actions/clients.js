// первое слово по названию файла а потом само действие
export const CLIENTS_ADD_CLIENT = 'CLIENTS_ADD_CLIENT';

export const CLIENTS_UPDATE_EDITABLE_CLIENT = 'CLIENTS_UPDATE_EDITABLE_CLIENT';

export const CLIENTS_RESET_EDITABLE_CLIENT = 'CLIENTS_RESET_EDITABLE_CLIENT';

export const CLIENTS_SET_EDITABLE_CLIENT_BY_ID = 'CLIENTS_SET_EDITABLE_CLIENT_BY_ID';

export const CLIENTS_SET_VIEWABLE_CLIENT_BY_ID = 'CLIENTS_SET_VIEWABLE_CLIENT_BY_ID';

export const CLIENTS_FETCH_LIST = 'CLIENTS_FETCH_LIST';
export const CLIENTS_FETCH_SUCCESS = 'CLIENTS_FETCH_SUCCESS';
export const CLIENTS_FETCH_ERROR = 'CLIENTS_FETCH_ERROR';

export const CLIENTS_UPDATE_SEARCH_QUERY = 'CLIENTS_UPDATE_SEARCH_QUERY';
export const CLIENTS_APPLY_SEARCH = 'CLIENTS_APPLY_SEARCH';

export const CLIENTS_UPDARE_BY_ID = 'CLIENTS_UPDARE_BY_ID';

// payload обобщенная переменная
export const addClient = payload => ({
  type: CLIENTS_ADD_CLIENT,
  payload,
});

export const updateEditableClient = payload => ({
  type: CLIENTS_UPDATE_EDITABLE_CLIENT,
  payload,
});

export const resetEditableClient = payload => ({
  type: CLIENTS_RESET_EDITABLE_CLIENT,
  payload,
});

export const setEditableClientById = payload => ({
  type: CLIENTS_SET_EDITABLE_CLIENT_BY_ID,
  payload,
});

export const setViewableClientById = payload => ({
  type: CLIENTS_SET_VIEWABLE_CLIENT_BY_ID,
  payload,
});

export const fetchClientList = payload =>({
  type: CLIENTS_FETCH_LIST,
  payload,
})

export const fetchClientSucces = payload =>({
  type: CLIENTS_FETCH_SUCCESS,
  payload,
})

export const fetchClientError = payload =>({
  type: CLIENTS_FETCH_ERROR,
  payload,
})

export const updateClientsSearchQuerry = payload =>({
  type: CLIENTS_UPDATE_SEARCH_QUERY,
  payload,
})
export const applyClientSearch = payload =>({
  type: CLIENTS_APPLY_SEARCH,
  payload,
})
export const updateClientById = payload =>({
  type: CLIENTS_UPDARE_BY_ID,
  payload,
})
