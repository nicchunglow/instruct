import { FEED_ACTION_SUCCESS } from "./feedActionTypes";

export const allFeeds = (feed: any) => ({
	type: FEED_ACTION_SUCCESS,
	payload: feed,
});

export const loadFeed = () => async (dispatch: any) => {
	const feed: any = await fetch("https://my.api.mockaroo.com/test?key=4557ea40").then((res) => res.json());
	dispatch(allFeeds(feed));
};
