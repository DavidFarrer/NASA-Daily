import React from "react";
import defaultImage from "../images/default-nasa.png";
import ErrorBoundary from "./ErrorBoundary";

class Daily extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
			dataLoaded: false,
			mediaLoaded: false,
			error: false
		}
		this.onMediaLoad = this.onMediaLoad.bind(this);
	}
	componentDidMount() {
		fetch("https://api.nasa.gov/planetary/apod?api_key=gLolLfXqaaTb7xnWrJrTiCABn0IOEElx0PrmA8bc")
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		}).then(json => {
			console.log(json);
			this.setState({
				title: json.title,
				description: json.explanation,
				url: json.url,
				media_type: json.media_type,
				date: json.date,
				dataLoaded: true,
			});
		}).catch((thrownError) => {
			this.setState({
				error: true
			});
		});
	}
	onMediaLoad() {
		console.log(this.state.media_type);
		this.setState({
			mediaLoaded: true
		});
	}
	renderMedia() {
		switch(this.state.media_type) {
			case "image":
				return (
					<div>
						{this.renderLoader()}
						<div className={this.state.mediaLoaded ? "daily__imageContainer" : "hidden"}>
							<img className="daily__image" src={this.state.url} onLoad={this.onMediaLoad} alt={this.state.title} />
						</div>
					</div>
				);
			case "video":
				return (
					<div>
						{this.renderLoader()}
						<div className={this.state.mediaLoaded ? "daily__videoWrapper" : "hidden"}>
							<iframe className="daily__video" src={this.state.url} onLoad={this.onMediaLoad}></iframe>
						</div>
					</div>
				);
		}
	}
	renderLoader() {
		if (!this.state.mediaLoaded) {
			return (<div className="loader"></div>);
		}
		return null;
	}
	render() {
		const dataLoaded = this.state.dataLoaded;
		return (
			<ErrorBoundary error={this.state.error}>
				{dataLoaded ? (
					<figure>
						<h1 className="daily__title">{this.state.title}</h1>
						<h4 className="daily__date">{this.state.date}</h4>						
						{this.renderMedia()}
						<h3 className="daily__description">{this.state.description}</h3>
					</figure>
				) : (
					<div className="loader"></div>
				)}
			</ErrorBoundary>
		);
	}
}

export default Daily;

// <img className="hidden" onLoad={this.onImageLoad} src={this.state.url} />
// <iframe className="hidden" onLoad={this.onImageLoad} src={this.state.url} />