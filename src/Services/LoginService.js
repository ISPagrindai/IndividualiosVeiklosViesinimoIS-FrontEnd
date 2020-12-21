import {errorToString, get, post, setAuthorizationToken} from './restApiService'
import NotificationService from './NotificationService'
import cookie from 'js-cookie';

export function Login(login){
    return post('/Users/authenticate', login)
        .then(response => {
            if(response){
                cookie.set('TOKEN', response.token);
                setAuthorizationToken(response.token);
                NotificationService.success("Sėkmingai prisijungėte")
                console.log(cookie);
                return true;
            }
            NotificationService.error(errorToString(response));
            return false;
        })
        .catch(error => NotificationService.error(errorToString(error)));
}
export function RegisterUserService(data){
    return post('/Users/register', data)
        .then(() => {
            NotificationService.success("Sėkmingai užsiregistravote, dabar prisijunkite")
        })
        .catch(error => {
            NotificationService.error(errorToString(error));
        });
}
export function RegisterAdminService(data){
    return post('/Users/registerAdmin', data)
        .then(() => {
            NotificationService.success("Sėkmingai sukurtas administratorius")
        })
        .catch(error => {
            NotificationService.error(errorToString(error));
        });
}
export function RegisterCompanyService(data){
    return post('/Users/registerCompany', data)
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