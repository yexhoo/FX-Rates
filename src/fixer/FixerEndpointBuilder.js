const _ENDPOINT = 'http://data.fixer.io/api/';
const  _SYMBOLS = 'symbols?';
const  _ACCESKEY_TOKEN = 'access_key=';
const  _ACCESKEY_DEFAULT_VALUE = 'b63fbc5e895bbca0ed87a0ced3df12f8';

export function symbolsEndpoint() {
    return _ENDPOINT+_SYMBOLS+_ACCESKEY_TOKEN+_ACCESKEY_DEFAULT_VALUE;
}



