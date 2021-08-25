import React from "react";
import "./Home.css";
import "../Shared/Button.css";
import "../Shared/Card.css";
import { Container } from "@material-ui/core";
import FeedCard from "../Components/FeedCard";
import { IUserFeed } from "../Models/User.model";
import Axios from "axios";

class Home extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			feed: [],
		};
	}

	componentDidMount() {
		this.handleCardLoad();
	}

	handleCardLoad = async () => {
		const res = await Axios.get("https://my.api.mockaroo.com/users?key=1f30b220");
		this.setState({
			feed: res.data,
		});
	};
	render() {
		const { feed } = this.state;
		const newFeed = feed.filter((item: IUserFeed) => item.id % 2 !== 0);
		return (
			<Container maxWidth="sm">
				{newFeed.map((info: IUserFeed) => {
					return <FeedCard cardInfo={info} key={info.id} />;
				})}
			</Container>
		);
	}
}

export default Home;
