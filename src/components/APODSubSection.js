import React, { useState } from 'react';
import $ from 'jquery';
import './APODSubSection.css';
import { Button } from './Button';

export default class APODSubSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
			explanation: "",
			title: "",
			mediaType: ""
		}
	}

	render() {
		return (
			<>
			  <Button onClick={this.fetch.bind(this)}>
			  	Fetch Picture
			  </Button>
			  <p>
			    {this.state.title}
			  </p>
			  {this.state.mediaType !== "video" ? <img src={this.state.url} className="nasa"/>
			  	: <iframe src={this.state.url} frameborder='0' allow='autoplay; encrypted-media'
			  		allowfullscreen title='video' width='853' height='480'/>}
			</>
		);
	}

	fetch() {
		var context = this;

		var month = this.props.date.substring(0, this.props.date.indexOf('/'));
		if (month.length < 2) {
			month = "0" + month;
		}
		var day = this.props.date.substring(this.props.date.indexOf('/') + 1, this.props.date.indexOf('/', 3))
		if (day.length < 2) {
			day = "0" + day;
		}

		var year = this.props.date.substring(this.props.date.indexOf('/', 3) + 1);

		var url = "https://api.nasa.gov/planetary/apod?api_key=kaOBcWpith5vDxTLRNsiw6VWOXEt5nVmBcupwgov&date="
		+ year + "-" + month + "-" + day;

		fetch(url)
		  .then(res => res.json())
		  .then(
		    (result) => {
		      context.setState({
		      	url: result.url,
		      	explanation: result.explanation,
		      	title: result.title,
		      	mediaType: result.media_type
		      });
		    })
	}
}