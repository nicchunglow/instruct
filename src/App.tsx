import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Containers/Home";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Route exact path="/" component={Home} />
			</div>
		</BrowserRouter>
	);
}

export default App;