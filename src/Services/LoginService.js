import {errorToString, get, post, setAuthorizationToken} from './restApiService'
import NotificationService from './NotificationService'
import cookie from 'js-cookie';

export function Login(login){
    return post('/Users/authenticate', login)
        .then(response => {
            if(response){
                cookie.set('TOKEN', response.token);
                setAuthorizationToken(response.token);
                return true;
            }
            return false;
        })
        .catch(error => console.log(error));
}
export function RegisterUserService(data){
    return post('/Users/registerCompany', data)
        .then(() => {
            NotificationService.success("Sėkmingai užsiregistravote, dabar prisijunkite")
        })
        .catch(error => {
            NotificationService.error(errorToString(error));
        });
}
export function RegisterCompanyService(data){
    return post('/Users/register', data)
        .then(() => {
            NotificationService.success("Sėkmingai užsiregistravote, dabar prisijunkite")
        })
        .catch(error => {
            NotificationService.error(errorToString(error));
        });
}
export function VerifyToken(token){
    return get('/Verify')
        .then(response =>{
            return response;
        })
}