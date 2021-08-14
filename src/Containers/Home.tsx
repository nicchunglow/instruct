import React from "react";
import "./Home.css";
import "../Shared/Button.css";
import "../Shared/Card.css";
import { Container } from "@material-ui/core";
import FeedCard from "../Components/FeedCard";
import { IUserFeed } from "../Models/User.model";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as feedActionsCreators from "../store/actions/feedActions";
import { loadFeed } from "../store/reducers/feedReducer";

const Home = () => {
	const feedState = useSelector((state) => state);
	const dispatch = useDispatch();
	const boundFeedCreators = bindActionCreators(feedActionsCreators, dispatch);

	const [userFeed, setUserFeed] = React.useState<IUserFeed[] | any>();

	const handleCardLoad = () => {
		setUserFeed([
			{ id: 1, message: "just" },
			{ id: 2, message: "trying" },
			{ id: 3, message: "a" },
			{ id: 4, message: "few" },
		]);
	};
	const onLoad = () => {
		dispatch(loadFeed());
	};

	React.useEffect(() => {
		handleCardLoad();
		onLoad();
		console.log("feedState", feedState);
		console.log("here");
	}, []);

	return (
		<Container maxWidth="sm">
			{userFeed?.map((info: IUserFeed) => {
				return <FeedCard cardInfo={info} key={info.id} />;
			})}
		</Container>
	);
};

export default Home;
