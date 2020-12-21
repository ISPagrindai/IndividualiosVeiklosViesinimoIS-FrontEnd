import TemporaryWorker from '../Models/TemporaryWorker';
import {errorToString, get, post, remove, put} from './restApiService';
import TemporaryWorkTypes from "../Models/TemporaryWorkTypes";
import NotificationService from './NotificationService';


export function getWorkers(){
    return get('/IndividualiVeikla')
    .then((response) => {
      return response.map((worker) => {
        return new TemporaryWorker(worker);
      });
    })
    .catch((error) => {
      //NotificationService.error(errorToString(error));
      console.log(error);
    });
}
export function getWorker(id){
  return get('/IndividualiVeikla/', id)
  .then((response) => {
    return new TemporaryWorker(response);
  })
  .catch((error) => {
    //NotificationService.error(errorToString(error));
    console.log(error);
  });
}

export function getWorkTypes(){
  return get('/Helper')
  .then((response) => {
    return response.map((type) => {
      return new TemporaryWorkTypes(type);
    });
  })
  .catch((error) => {
    console.log(error);
  });
}

export function newWorker(data){
  data.veiklosTipas = parseInt(data.veiklosTipas)
  data.kaina = parseFloat(data.kaina)

  return post('/IndividualiVeikla', data)
  .then((response) => {
    NotificationService.success("Individuali veikla sukurta")
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}
export function updateWorker(data){
  data.id = parseInt(data.id);
  data.veiklosTipas = parseInt(data.veiklosTipas)
  data.kaina = parseFloat(data.kaina)

  return put('/IndividualiVeikla', data)
  .then((response) => {
    NotificationService.success("Individuali veikla paredaguota")
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}

export function getCurrentUser(){
  return get('/Profile')
      .then(response =>{
          return response;
      })
}

export function deleteWork(id){
  id = parseInt(id);
  return remove(`/IndividualiVeikla/${id}`)
  .then((response) => {
    NotificationService.success("Individuali veikla ištrinta")
  });
}