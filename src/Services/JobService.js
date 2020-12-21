import {errorToString, get, post, put, remove} from './restApiService'
import TemporaryJob from '../Models/TemporaryJob'
import CompanyInfo from '../Models/CompanyInfo'
import Candidate from '../Models/Candidate'
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
export function getCurrentUserJobs(){
  return get('/Imones/current')
  .then((response) => {
    return response.map((job) => {
      return new TemporaryJob(job);
    });
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}
export function getCurrentCompanyInfo(){
  return get('/Imones/current/info')
  .then((response) => {
    return new CompanyInfo(response);
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
export function getJobCandidates(id){
  return get('/Imones/candidates/', id)
  .then((response) => {
    return response.map(candidate =>{
      return new Candidate(candidate);
    })
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}
export function newJob(data){
  data.tipas = parseInt(data.tipas)
  data.uzmokestis = parseFloat(data.uzmokestis)
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
export function deleteJob(id){
  id = parseInt(id);
  return remove(`/Imones/${id}`)
  .then((response) => {
    NotificationService.success("Darbo pasūlymas ištrintas")
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}
export function deleteCandidate(data){
  return post(`/Imones/candidates/remove`, data)
  .then((response) => {
    NotificationService.success(response)
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}