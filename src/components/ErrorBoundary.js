import React from "react";

const ErrorBoundary = ({ children, error }) => (
	<div>
		{error ? (
			<h3 className="daily__error">There was an error. Please try again.</h3>
		) : (
			children
		)}
	</div>
);

export default ErrorBoundary;