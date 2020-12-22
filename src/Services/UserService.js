import {errorToString, get, remove} from './restApiService'
import TemporaryUser from '../Models/TemporaryUser'
import NotificationService from './NotificationService';

export function getUsers(){
    return get('/Admin')
    .then((response) => {
      return response.map((user) => {
        return new TemporaryUser(user);
      });
    })
    .catch((error) => {
      //NotificationService.error(errorToString(error));
      console.log(error);
    });
}
export function deleteUser(id){
  id = parseInt(id);
  return remove(`/Admin/user/${id}`)
  .then((response) => {
    NotificationService.success("VArtotojas ištrintas")
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}