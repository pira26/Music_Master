import React, { Component } from 'react';

import Search from './containers/Search';
import '../public/stylesheet/app.css'; 

export default class App extends Component {

  	render() {
    	return (
      		<div className="App">
      			<div className="title">Music Master</div>
      			<Search />
      			<div className="profile">
      				<div>Artist Picture</div>
      				<div>Artist Name</div>      			
      			</div>
      			<div className="gallery">
      				<div>Gallery</div>
      			</div>
      		</div>
    	);
  	}
}
