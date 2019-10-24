// Libraries
import React from "react";
import { connect } from "react-redux";

export const PotluckInfo = ({props}) => {
	return (
		<div>
      {/* <p>Event Name: {props}</p>
      <p>Date: {props}</p>
      <p>Time: {props}</p>
      <p>Address: {props}</p> */}

		</div>
	);
};


const mapStateToProps = state => {
	return {};
};
const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PotluckInfo);