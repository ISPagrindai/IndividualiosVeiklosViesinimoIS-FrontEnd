import {errorToString, get, put} from './restApiService'
import TemporaryNewEmployer from '../Models/TemporaryNewEmployer'
import NotificationService from './NotificationService';

export function getNewEmpolyers(){
    return get('/Admin/naujosImones')
    .then((response) => {
      return response.map((employer) => {
        return new TemporaryNewEmployer(employer);
      });
    })
    .catch((error) => {
      NotificationService.error(errorToString(error));
    });
}
export function confirmEmployer(data) {
  data.id = parseInt(data.id);
  return put('/Admin', data)
  .then((response) => {
    NotificationService.success("Įmonės būsena pakeista")
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}