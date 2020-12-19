import axios from 'axios';

const API_URL = 'https://localhost:5001';

export default function setAuthorizationToken(token) {
  axios.defaults.headers.common['Authorization'] = token;
}

export function get(url, id = '') {
  const endpoint = API_URL + url + id;
  return axios.get(endpoint).then((response) => {
    return response.data;
  });
}

export function post(url, data) {
  const endpoint = API_URL + url;
  return axios.post(endpoint, data).then((response) => {
    return response.data;
  });
}

export function put(url, data) {
  const endpoint = API_URL + url;
  return axios.put(endpoint, data).then((response) => {
    return response.data;
  });
}

export function remove(url) {
  const endpoint = API_URL + url;
  return axios.delete(endpoint).then((response) => {
    return response.data;
  });
}

export function postFile(url, file) {
  const endpoint = API_URL + url;
  return axios
    .post(endpoint, file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function errorToString(error) {
  return (
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString()
  );
}
