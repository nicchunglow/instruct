import { FEED_ACTION_SUCCESS } from "./feedActionTypes";
import Axios, { AxiosResponse } from "axios";
import { IUserFeed } from "../../Models/User.model";

export const allFeeds = (feed: IUserFeed) => ({
	type: FEED_ACTION_SUCCESS,
	payload: feed,
});

export const loadFeed = () => async (dispatch: any) => {
	const feed: AxiosResponse = await Axios.get("https://my.api.mockaroo.com/test?key=4557ea40");
	dispatch(allFeeds(feed.data));
};
