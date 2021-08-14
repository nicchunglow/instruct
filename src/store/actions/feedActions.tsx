import { FEED_ACTION_SUCCESS } from "./feedActionTypes";

export const allFeeds = (feed: any) => ({
	type: FEED_ACTION_SUCCESS,
	payload: feed,
});
