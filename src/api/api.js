import axios from "axios";

export const handlePostRequest = async (urlApi, config, dataBody) => {
	try {
		const response = await axios.create().post(urlApi, dataBody, config);
		console.log('url', urlApi, 'response', response);
		return response;
	} catch (error) {
		console.log('url', urlApi, 'Api handlePostRequest error: ' + error);
		return null;
	}
}

export const handlePutRequest = async (urlApi, config, dataBody) => {
	try {
		const response = await axios.create().put(urlApi, dataBody, config);
		console.log('url', urlApi, 'response', response);
		return response;
	} catch (error) {
		console.log('url', urlApi, 'Api handlePutRequest error: ' + error);
		return null;
	}
}

export const handleGetRequest = async (urlApi, config) => {
	try {
		const response = await axios.create().get(urlApi, config);
		console.log('url', urlApi, 'response', response);
		return response;
	} catch (error) {
		console.log('url', urlApi, 'Api handleGetRequest error: ' + error);
		return null;
	}
}

export const handleDeleteRequest = async (urlApi, config) => {
	try {
		const response = await axios.create().delete(urlApi, config);
		console.log('url', urlApi, 'response', response);
		return response;
	} catch (error) {
		console.log('url', urlApi, 'Api handleDeleteRequest error: ' + error);
		return null;
	}
}
