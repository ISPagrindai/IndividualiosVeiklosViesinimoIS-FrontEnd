import {errorToString, get, post} from './restApiService'
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
      NotificationService.error(errorToString(error));
    });
}
export function newJob(data){
  return post('/Imones', data)
  .then((response) => {
    NotificationService.success("Darbo pasūlymas sukurtas")
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}