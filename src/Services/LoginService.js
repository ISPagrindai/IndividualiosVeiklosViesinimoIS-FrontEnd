import {get, post, setAuthorizationToken} from './restApiService'
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
export function VerifyToken(token){
    return get('/Verify')
        .then(response =>{
            return response;
        })
}