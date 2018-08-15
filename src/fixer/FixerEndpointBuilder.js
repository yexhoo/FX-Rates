import dateformat from 'dateformat';

const _ENDPOINT = 'http://data.fixer.io/api/';
const _SYMBOLS = 'symbols?';
const _ACCESKEY_TOKEN = 'access_key=';
const _BASE_PARAM = "&base=";
const _SYMBOLS_PARAM = "&symbols=";
const _ACCESKEY_DEFAULT_VALUE = 'b63fbc5e895bbca0ed87a0ced3df12f8';

export function symbolsEndpoint() {
    return "".concat(_ENDPOINT)
    .concat(_SYMBOLS)
    .concat(_ACCESKEY_TOKEN)
    .concat(_ACCESKEY_DEFAULT_VALUE);
}

export function historicalEndpoint(historical) {
    return "".concat(_ENDPOINT)
    .concat(dateformat(historical.date, 'yyyy-mm-dd')+"?")
    .concat(_ACCESKEY_TOKEN)
    .concat(_ACCESKEY_DEFAULT_VALUE)
    .concat(_BASE_PARAM)
    .concat(historical.base)
    .concat(_SYMBOLS_PARAM)
    .concat(historical.symbols.join());
}