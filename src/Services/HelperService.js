import {get} from './restApiService'

export function getJobTypes(){
    return get('/Helper').then(response =>{
        return response;
    });
}