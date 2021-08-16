import { FEED_ACTION_REQUEST, FEED_ACTION_SUCCESS, FEED_ACTION_FAIL } from "../actions/feedActionTypes";

export const userReducer = (state = {}, action: any) => {
	switch (action.type) {
		case FEED_ACTION_REQUEST:
			return { loading: true };
		case FEED_ACTION_SUCCESS:
			return { loading: false, payload: action.payload };
		case FEED_ACTION_FAIL:
			return { loading: false, error: action.error };
		default:
			return state;
	}
};
