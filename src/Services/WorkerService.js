import TemporaryWorker from '../Models/TemporaryWorker';
import {errorToString, get} from './restApiService';

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