import { FEED_ACTION_SUCCESS } from "./feedActionTypes";
import Axios, { AxiosResponse } from "axios";
import { IUserFeed } from "../../Models/User.model";

export const allFeeds = (feed: IUserFeed) => ({
	type: FEED_ACTION_SUCCESS,
	payload: feed,
});

export const loadFeed = () => async (dispatch: any) => {
	const feed: AxiosResponse = await Axios.get("https://my.api.mockaroo.com/users?key=1f30b220");
	dispatch(allFeeds(feed.data));
};
