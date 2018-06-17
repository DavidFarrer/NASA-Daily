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
	renderNearEarthObjects(nearEarthObjects) {
		console.log(nearEarthObjects);
		return (
			<ul>
				{
					nearEarthObjects.map(nearEarthObject => {
						return (
							<li key={nearEarthObject.neo_reference_id} className="nearEarth__object">
								{nearEarthObject.name}
							</li>
						);
					})
				}
			</ul>
		);
	}
	render() {
		return (
			<div>
				<h1 className="nearEarth__title">Near-Earth Objects</h1>
				{this.state.dataLoaded ? (
					<div>
						<h3 className="nearEarth__date">{this.state.date}</h3>
						{this.renderNearEarthObjects(this.state.nearEarthObjects)}
					</div>
				) : (
					<div className="loader"></div>
				)}
			</div>
		);
	}
}

export default NearEarth;