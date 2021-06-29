import React from "react";
import "./Home.css";
import "../Shared/Button.css";
import "../Shared/Card.css";
import { Card, Container } from "@material-ui/core";

const Home = () => {
	return (
		<Container maxWidth="sm">
			<Card className="card">
				<div className="card-container"></div>
			</Card>
		</Container>
	);
};

export default Home;
