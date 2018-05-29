import React from "react";
import defaultImage from "../images/default-nasa.png";

class Daily extends React.Component {
	constructor(props) {
		super(props);
		let today = new Date();
		this.state = {
			title: "NASA Image of the Day",
			description: "Description for Image of the Day",
			url: defaultImage,
			date: today.toLocaleDateString("en-US")
		}
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
				date: json.date
			});
		});
	}

	render() {
		return (
			<figure>
				<h1 className="daily__title">{this.state.title}</h1>
				<h4 className="daily__date">{this.state.date}</h4>
				<a href={this.state.url}><img className="daily__image" src={this.state.url} alt="NASA Image of the Day" /></a>
				<h3 className="daily__description">{this.state.description}</h3>
			</figure>
		);
	}
}

export default Daily;