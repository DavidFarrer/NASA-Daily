import React from "react";

class NearEarth extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		fetch("https://api.nasa.gov/neo/rest/v1/feed/today?detailed=false&api_key=gLolLfXqaaTb7xnWrJrTiCABn0IOEElx0PrmA8bc")
		.then(response => {
			return response.json();
		}).then(json => {
			console.log(json);
		})
	}
	render() {
		return (
			<h1 className="nearEarth__title">Near-Earth Objects</h1>
		);
	}
}

export default NearEarth;