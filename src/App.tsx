import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Containers/Home";
import HomeHooks from "./Containers/HomeHooks";
import HomeClass from "./Containers/HomeClass";
import Header from "./Components/Header";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="App">
				<Route exact path="/" component={Home} />
				<Route exact path="/hooks" component={HomeHooks} />
				<Route exact path="/class" component={HomeClass} />
			</div>
		</BrowserRouter>
	);
}

export default App;
