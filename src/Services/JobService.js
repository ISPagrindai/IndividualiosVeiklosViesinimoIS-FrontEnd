import {errorToString, get, post, put} from './restApiService'
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

export function getJob(id){
  return get('/Imones/darbas/', id)
  .then((response) => {
    return new TemporaryJob(response);
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}
export function newJob(data){
  data.tipas = parseInt(data.tipas)
  data.uzmokestis = parseFloat(data.uzmokestis)

  console.log(data)

  return post('/Imones', data)
  .then((response) => {
    NotificationService.success("Darbo pasūlymas sukurtas")
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}
export function updateJob(data){
  data.id = parseInt(data.id)
  data.tipas = parseInt(data.tipas)
  data.uzmokestis = parseFloat(data.uzmokestis)
  return put('/Imones', data)
  .then((response) => {
    NotificationService.success("Darbo pasūlymas paredaguotas")
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}