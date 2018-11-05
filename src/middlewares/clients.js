import {
  CLIENTS_FETCH_LIST,
  fetchClientSucces,
  fetchClientError,
} from '../actions/clients'

export default store => next => action =>{
  next(action);
  if (action.type ===CLIENTS_FETCH_LIST){
    fetch('http://www.json-generator.com/api/json/get/cgzawWSCTC?indent=2')
        .then(result => result.json())
        .then(clientsList =>{
          next(fetchClientSucces(clientsList));
        })
        .catch(error =>{
          next(fetchClientError(error));
        });
  }
  console.log(action);
};