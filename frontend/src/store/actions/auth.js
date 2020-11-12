import { AsyncStorage } from 'react-native';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOG_OUT = 'LOG_OUT';
export const ADD_FAV_STATE = 'ADD_FAV_STATE';
export const REMOVE_FAV_STATE = 'REMOVE_FAV_STATE';
export const ADD_FAV_REGION = 'ADD_FAV_REGION';
export const REMOVE_FAV_REGION = 'REMOVE_FAV_REGION';

export const authenticate = (token, userId, expiryTime) => {
	return (dispatch) => {
		dispatch(setLogoutTimer(expiryTime));
		dispatch({
			type: AUTHENTICATE,
			token: token,
			userId: userId
		});
	};
};

export const addFavState = (stateId) => {
	return {
		type: ADD_FAV_STATE,
		stateId: stateId
	};
};

export const removeFavState = (stateId) => {
	return {
		type: REMOVE_FAV_STATE,
		stateId: stateId
	};
};

export const addFavRegion = (regionId) => {
	return {
		type: ADD_FAV_REGION,
		regionId: regionId
	};
};

export const removeFavRegion = (regionId) => {
	return {
		type: REMOVE_FAV_REGION,
		regionId: regionId
	};
};
