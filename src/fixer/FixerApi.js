import {symbolsEndpoint,historicalEndpoint} from './FixerEndpointBuilder.js';
import {doGet} from '../utils/RestClient.js';

export function getSymbols(symbolsRequest) {
	doGet(symbolsEndpoint(), symbolsRequest.onSuccess, symbolsRequest.onError);
}

export function getHistorical(historicalRequest) {
	doGet(historicalEndpoint(historicalRequest), historicalRequest.onSuccess, historicalRequest.onError);
}