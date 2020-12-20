import {errorToString, get} from './restApiService'
import TemporaryJob from '../Models/TemporaryJob'
import NotificationService from './NotificationService';

export function getJobs(){
    return get('/Imones')
    .then((response) => {
      return response.map((job) => {
        return new TemporaryJob(job);
      });
    })
    .catch((error) => {
      //NotificationService.error(errorToString(error));
      console.log(error);
    });
}