import {errorToString, get} from './restApiService'
import TemporaryEmployer from '../Models/TemporaryEmployer'
import NotificationService from './NotificationService';

export function getEmployers(){
    return get('/Admin/imones')
    .then((response) => {
      return response.map((employer) => {
        return new TemporaryEmployer(employer);
      });
    })
    .catch((error) => {
      NotificationService.error(errorToString(error));
    });
}