import { AUTH_START } from '../actions/home';

const initialState = {
    onboarding: true
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                onboarding: false
            };
        default:
            return state;
    }
};

export default homeReducer;