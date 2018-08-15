import dateformat from 'dateformat';

const _ENDPOINT = 'http://data.fixer.io/api/';
const _SYMBOLS = 'symbols?';
const _ACCESKEY_TOKEN = 'access_key=';
const _BASE_PARAM = "&base=";
const _SYMBOLS_PARAM = "&symbols=";
const _ACCESKEY_DEFAULT_VALUE = 'b63fbc5e895bbca0ed87a0ced3df12f8';

export function symbolsEndpoint() {
    return _ENDPOINT+_SYMBOLS+_ACCESKEY_TOKEN+_ACCESKEY_DEFAULT_VALUE;
}

export function historicalEndpoint(date, base, symbols) {
    console.log("******************");
    let url = "";
    url = url.concat(_ENDPOINT);
    url = url.concat(dateformat(date, 'yyyy-mm-dd')+"?");
    url = url.concat(_ACCESKEY_TOKEN);
    url = url.concat(_ACCESKEY_DEFAULT_VALUE);
    url = url.concat(_BASE_PARAM);
    url = url.concat(base);
    url = url.concat(_SYMBOLS_PARAM);
    url = url.concat(symbols.join());
    console.log(url);
    return url;
}