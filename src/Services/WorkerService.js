import TemporaryWorker from '../Models/TemporaryWorker';
import {errorToString, get} from './restApiService';
import TemporaryWorkTypes from "../Models/TemporaryWorkTypes";

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