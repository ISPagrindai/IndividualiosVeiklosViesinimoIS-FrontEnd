import {errorToString, get, remove} from './restApiService'
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
export function deleteEmployer(id) {
  id = parseInt(id);
  return remove(`/Admin/imones/${id}`)
    .then((response) => {
      NotificationService.success("Įmonė ištrinta")
    })
    .catch((error) => {
      NotificationService.error(errorToString(error));
    });
}