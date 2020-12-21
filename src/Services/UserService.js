import {errorToString, get} from './restApiService'
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