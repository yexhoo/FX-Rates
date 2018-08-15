import {symbolsEndpoint,historicalEndpoint} from './FixerEndpointBuilder.js';
import {doGet} from '../utils/RestClient.js';

export function getSymbols(onSuccess, onError) {
	doGet(symbolsEndpoint(), onSuccess, onError);
}

export function getHistorical(date, base, symbols,onSuccess, onError) {
	doGet(historicalEndpoint(date, base, symbols), onSuccess, onError);
}