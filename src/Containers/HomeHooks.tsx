import React from "react";
import "./Home.css";
import "../Shared/Button.css";
import "../Shared/Card.css";
import { Container } from "@material-ui/core";
import FeedCard from "../Components/FeedCard";
import { IUserFeed } from "../Models/User.model";
import Axios from "axios";

const Home = () => {
	const [userFeed, setUserFeed] = React.useState<IUserFeed[] | any>();

	const handleCardLoad = async () => {
		const res = await Axios.get("https://my.api.mockaroo.com/test?key=4557ea40");
		setUserFeed(res.data);
	};

	React.useEffect(() => {
		handleCardLoad();
	}, []);
	console.log("userFeed", userFeed);
	return (
		<Container maxWidth="sm">
			{userFeed?.map((info: IUserFeed) => {
				return <FeedCard cardInfo={info} key={info.id} />;
			})}
		</Container>
	);
};

export default Home;
