import axios from 'axios';

export function doGet(url, onSuccess, onError) {
    axios.get(url)
      .then(function (response) {
        onSuccess(response);
      })
      .catch(function (error) {
        onError(error);
      }); 
}