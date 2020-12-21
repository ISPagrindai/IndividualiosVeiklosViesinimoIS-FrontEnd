import {errorToString, get} from './restApiService'
import TemporaryProfile from '../Models/TemporaryProfile'
import NotificationService from './NotificationService';

export function getProfile(id){
    return get('/Profile/', id)
    .then((response) => {
      console.log(response)
        return new TemporaryProfile(response);
    })
    .catch((error) => {
      console.log(error);
    });
}