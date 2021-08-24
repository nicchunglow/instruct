import React from "react";
import "./Home.css";
import "../Shared/Button.css";
import "../Shared/Card.css";
import { Container } from "@material-ui/core";
import FeedCard from "../Components/FeedCard";
import { IUserFeed } from "../Models/User.model";
import { useDispatch, useSelector } from "react-redux";
import { loadFeed } from "../store/actions/feedActions";
import Loader from "react-loader-spinner";

interface IFeed {
	loading: boolean;
	payload: IUserFeed[];
}

const Home: React.FC = () => {
	const feedState: IFeed = useSelector((state: any) => state.feed);
	const dispatch = useDispatch();

	const onLoad = () => {
		dispatch(loadFeed());
	};

	React.useEffect(() => {
		onLoad();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(feedState);
	return (
		<Container maxWidth="sm">
			<p>Count = {feedState?.payload ? feedState.payload.length : "Loading"}</p>
			<button onClick={onLoad}>RELOAD</button>
			{feedState.loading === true && <Loader type="Puff" color="#00BFFF" height={100} width={100} />}
			{feedState.payload?.map((info: IUserFeed) => {
				return <FeedCard cardInfo={info} key={info.id} />;
			})}
		</Container>
	);
};

export default Home;
