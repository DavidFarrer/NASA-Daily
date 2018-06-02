import React from "react";
import defaultImage from "../images/default-nasa.png";

class Daily extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
			dataLoaded: false,
			imageLoaded: false
		}
		this.onImageLoad = this.onImageLoad.bind(this);
	}
	componentDidMount() {
		fetch("https://api.nasa.gov/planetary/apod?api_key=gLolLfXqaaTb7xnWrJrTiCABn0IOEElx0PrmA8bc")
		.then(response => {
			return response.json();
		}).then(json => {
			this.setState({
				title: json.title,
				description: json.explanation,
				url: json.url,
				date: json.date,
				dataLoaded: true
			});
		});
	}

	onImageLoad() {
		this.setState({
			imageLoaded: true
		});
	}

	render() {
		const dataLoaded = this.state.dataLoaded;
		return (
			<div>
				{dataLoaded ? (
					<figure>
						<h1 className="daily__title">{this.state.title}</h1>
						<h4 className="daily__date">{this.state.date}</h4>
						<div className="daily__imageContainer">
							{this.state.imageLoaded ? (
								<img className="daily__image" src={this.state.url} alt={this.state.title} />
							) : (
								<div className="loader"></div>
							)}
						</div>
						<h3 className="daily__description">{this.state.description}</h3>
					</figure>
				) : (
					<div className="loader"></div>
				)}
					<img className="hidden" onLoad={this.onImageLoad} src={this.state.url} />
			</div>
		);
	}
}

export default Daily;