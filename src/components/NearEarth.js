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
			const nearEarthObjectsRaw = json.near_earth_objects[Object.keys(json.near_earth_objects)[0]];
			const nearEarthObjects = nearEarthObjectsRaw.map(nearEarthObject => {
				console.log(nearEarthObject);
				return {
					id: nearEarthObject.neo_reference_id,
					link: nearEarthObject.nasa_jpl_url,
					name: nearEarthObject.name,
					absoluteMagnitude: nearEarthObject.absolute_magnitude_h,
					hazardous: nearEarthObject.is_potentially_hazardous_asteroid,
					kilometersPerSecond: nearEarthObject.close_approach_data[0].relative_velocity.kilometers_per_second,
					missAstronomicalUnits: nearEarthObject.close_approach_data[0].miss_distance.astronomical
				}
			});
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
							<li key={nearEarthObject.id} className="nearEarth__object">
								<a href={nearEarthObject.link} target="_blank" className="nearEarth__link">{nearEarthObject.name}</a>
								<p className="nearEarth__distance">Distance of Pass: {(+nearEarthObject.missAstronomicalUnits).toFixed(2)} AU</p>
								<p className="nearEarth__speed">Speed: {(+nearEarthObject.kilometersPerSecond).toFixed(2)} km/s</p>
								<p className="nearEarth__hazardous">Hazardous: {nearEarthObject.hazardous.toString()}</p>
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