import {errorToString, post, get} from './restApiService'
import NotificationService from './NotificationService';
import TemporaryReview from '../Models/TemporaryReview';


export function createReviewOnWorker(data){
    data.ivertinimas = parseFloat(data.ivertinimas)
    data.vartotojasId = parseInt(data.vartotojasId)

    console.log(data)
  
    return post('/Atsiliepimas', data)
    .then((response) => {
      NotificationService.success("Atsiliepimas apie individualią veiklą sukurtas")
    })
    .catch((error) => {
      NotificationService.error(errorToString(error));
    });
}

export function getReviews(){
  return get('/Atsiliepimas')
  .then((response) => {
    return response.map((job) => {
      return new TemporaryReview(job);
    });
  })
  .catch((error) => {
    NotificationService.error(errorToString(error));
  });
}