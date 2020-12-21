import TemporaryWorker from '../Models/TemporaryWorker';
import {errorToString, get, post} from './restApiService';
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

  console.log(data)

  return post('/IndividualiVeikla', data)
  .then((response) => {
    NotificationService.success("Individuali veikla sukurta")
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}