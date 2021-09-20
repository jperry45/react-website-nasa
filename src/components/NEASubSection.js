import React, { useState } from 'react';
import $ from 'jquery';
import './NEASubSection.css';
import { Button } from './Button';
import Pagination from './Pagination';

export default class NEASubSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			asteroids: [],
			dataLoaded: false,
			objectsPerPage: 5
		}
		this.sortByDistance = this.sortByDistance.bind(this);
	}

	asteroid(data) {
		return (
		  <a className="options" href={data.data.nasa_jpl_url}>
		    Name: "{data.data.name}" &nbsp; {data.data.close_approach_data[0].miss_distance.astronomical.substring(0,5)}AU from Earth
		  </a>
		);
	}


	render() {
		let pagination;
		if (this.state.asteroids !== undefined && this.state.asteroids.length != 0) {
			pagination = <Pagination
			    data={this.state.asteroids}
			    RenderComponent={this.asteroid}
			    title="Posts"
			    pageLimit={Math.floor(this.state.asteroids.length / this.state.objectsPerPage) + 1}
			    dataLimit={this.state.objectsPerPage}
			  />
		} else if (this.state.asteroids.length == 0 && this.state.dataLoaded) {
			pagination = <p>No asteroids found for {this.props.date} </p>
		}
		return (
			<>
			  <Button onClick={this.fetch.bind(this)}>
			  	Find Asteroids
			  </Button>
			  {pagination}
			</>
		);
	}

	fetch() {
		this.state.dataLoaded = true;
		var context = this;

		var month = this.props.date.substring(0, this.props.date.indexOf('/'));
		if (month.length < 2) {
			month = "0" + month;
		}

		var day = this.props.date.substring(this.props.date.indexOf('/') + 1, this.props.date.indexOf('/', 2))
		if (day.length < 2) {
			day = "0" + day;
		}

		var year = this.props.date.substring(this.props.date.indexOf('/', 2) + 1);

		var formattedDate = year + "-" + month + "-" + day;

		var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + formattedDate + 
		"&end_date=" + formattedDate + "&api_key=kaOBcWpith5vDxTLRNsiw6VWOXEt5nVmBcupwgov"

		fetch(url)
		  .then(res => res.json())
		  .then(
		    (result) => {
		    	var sortedAsteroids = this.sortByDistance(result.near_earth_objects[formattedDate]);
		      context.setState({
		      	asteroids: sortedAsteroids
		      });
		    })
	}

	sortByDistance(dataToSort) {
		var dataToReturn = [];
		var closest;
		var currentDistance;
		var closestDistance;
		while (dataToSort.length > 0) {
			dataToSort.forEach(function(asteroid) {
		                   if (!closest) {
		                   	closest = asteroid;
		                   } else {
		                   	currentDistance = parseFloat(asteroid.close_approach_data[0].miss_distance.astronomical.substring(0,5));
		                   	closestDistance = parseFloat(closest.close_approach_data[0].miss_distance.astronomical.substring(0,5));
		                   	if (currentDistance < closestDistance) {
		                   		closest = asteroid;
		                   	}
		                   }
		    });
		    dataToReturn.push(closest);
		    var index = dataToSort.indexOf(closest);
		    dataToSort.splice(index, 1);
		    closest = undefined;
		}
		return dataToReturn;
	}
}