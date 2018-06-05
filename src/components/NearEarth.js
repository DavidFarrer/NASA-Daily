import React from "react";

class NearEarth extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataLoaded: false
		}
	}
	componentDidMount() {
		fetch("https://api.nasa.gov/neo/rest/v1/feed/today?detailed=false&api_key=gLolLfXqaaTb7xnWrJrTiCABn0IOEElx0PrmA8bc")
		.then(response => {
			return response.json();
		}).then(json => {
			const nearEarthObjects = json.near_earth_objects[Object.keys(json.near_earth_objects)[0]];
			console.log(nearEarthObjects);
			this.setState({
				date: Object.keys(json.near_earth_objects)[0],
				nearEarthObjects,
				dataLoaded: true
			});
		})
	}
	render() {
		return (
			<div>
				<h1 className="nearEarth__title">Near-Earth Objects</h1>
				{this.state.dataLoaded ? (
					<h3>{this.state.date}</h3>
				) : (
					<div className="loader"></div>
				)}
			</div>
		);
	}
}

export default NearEarth;