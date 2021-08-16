import { FEED_ACTION_SUCCESS } from "./feedActionTypes";
import Axios from "axios";
export const allFeeds = (feed: any) => ({
	type: FEED_ACTION_SUCCESS,
	payload: feed,
});

export const loadFeed = () => async (dispatch: any) => {
	const feed: any = await Axios.get("https://my.api.mockaroo.com/test?key=4557ea40");
	dispatch(allFeeds(feed.data));
};
