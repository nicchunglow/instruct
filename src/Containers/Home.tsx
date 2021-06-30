import React from "react";
import "./Home.css";
import "../Shared/Button.css";
import "../Shared/Card.css";
import { Container } from "@material-ui/core";
import FeedCard from "../Components/FeedCard";
import { IUserFeed } from "../Models/User.model";

const Home = () => {
	const [userFeed, setUserFeed] = React.useState<IUserFeed[] | any>();

	const handleCardLoad = () => {
		setUserFeed([
			{ id: 1, message: "just" },
			{ id: 2, message: "trying" },
			{ id: 3, message: "a" },
			{ id: 4, message: "few" },
		]);
	};

	React.useEffect(() => {
		handleCardLoad();
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
