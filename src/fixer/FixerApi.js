import {symbolsEndpoint} from './FixerEndpointBuilder.js';
import {doGet} from '../utils/RestClient.js';

export function getSymbols(onSuccess, onError) {
	doGet(symbolsEndpoint(), onSuccess, onError);
}