import React from "react";
import "./Home.css";
import "../Shared/Button.css";
import "../Shared/Card.css";
import { Button, Container, TextField } from "@material-ui/core";
import FeedCard from "../Components/FeedCard";
import { IUserFeed } from "../Models/User.model";
import Axios from "axios";

const Home: React.FC = () => {
	const [userFeed, setUserFeed] = React.useState<IUserFeed[] | any>();
	const [showTitle, setShowTitle] = React.useState<string>("hi");
	const title = React.useRef("");

	const handleCardLoad = async () => {
		const res = await Axios.get("https://my.api.mockaroo.com/users?key=1f30b220");
		setUserFeed(res.data);
	};

	const handleTitleChange = (event: any) => {
		title.current = event.target.value;
	};

	const handleShowTitleChange = (event: any) => {
		setShowTitle(title.current);
	};

	React.useEffect(() => {
		handleCardLoad();
	}, [showTitle]);

	console.log("userFeed", userFeed);
	return (
		<Container maxWidth="sm">
			<h4>{showTitle}</h4>
			<TextField onChange={handleTitleChange} />
			<Button variant="contained" color="primary" onClick={handleShowTitleChange}>
				Change title
			</Button>
			{userFeed?.map((info: IUserFeed) => {
				return <FeedCard cardInfo={info} key={info.id} />;
			})}
		</Container>
	);
};

export default Home;
