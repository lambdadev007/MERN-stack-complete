import {
	AUTHENTICATE,
	LOG_OUT,
	ADD_FAV_STATE,
	REMOVE_FAV_STATE,
	ADD_FAV_REGION,
	REMOVE_FAV_REGION
} from '../actions/auth';

const initialState = {
	token: null,
	userId: null,
	favStates: {
		data: [],
		changed: 0
	},
	favRegions: {
		data: [],
		changed: 0
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return {
				...state,
				token: action.token,
				userId: action.userId
			};
		case LOG_OUT:
			return initialState;
		// case LOG_IN:
		//     return {
		//         token: action.token,
		//         userId: action.userId
		//     }
		case ADD_FAV_STATE:
			let favStates = state.favStates.data;
			favStates.push(action.stateId);

			return {
				...state,
				favStates: {
					data: favStates,
					changed: ++state.favStates.changed
				}
			};
		case REMOVE_FAV_STATE:
			favStates = state.favStates.data;
			let index = favStates.indexOf(action.stateId);
			if (index > -1) {
				favStates.splice(index, 1);
			}

			return {
				...state,
				favStates: {
					data: favStates,
					changed: --state.favStates.changed
				}
			};
		case ADD_FAV_REGION:
			let favRegions = state.favRegions.data;
			favRegions.push(action.regionId);

			return {
				...state,
				favRegions: {
					data: favRegions,
					changed: ++state.favRegions.changed
				}
			};
		case REMOVE_FAV_REGION:
			favRegions = state.favRegions.data;
			index = favRegions.indexOf(action.regionId);
			if (index > -1) {
				favRegions.splice(index, 1);
			}

			return {
				...state,
				favRegions: {
					data: favRegions,
					changed: --state.favRegions.changed
				}
			};
		default:
			return state;
	}
};
