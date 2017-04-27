import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

//import Search from './containers/Search';
import Profile from './components/Profile';
import Gallery from './containers/Gallery';
import '../public/stylesheet/app.css'; 

export default class App extends Component {

	constructor(props) {
        super(props);
        this.state = {
              query: '',
              artist: null,
              tracks: []
         }     
    }

    search() {
        //console.log(this.state);
        const BASE_URL = "https://api.spotify.com/v1/search?";
        let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        const ALBUM_URL = "https://api.spotify.com/v1/artists/";

        
        fetch(FETCH_URL, {
              method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            const artist = data.artists.items[0];
              
            this.setState({artist});

            FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=FR&`
            fetch(FETCH_URL, {
            	method: 'GET'
        	})
        	.then(res => res.json())
        	.then(data => {
        		//console.log('artist\'s top track: ',data);
        		const { tracks } = data; // pareil que const tracks = data.tracks;
        		this.setState({tracks});
        	})
        	.catch((err) => {return err});
        })
        .catch((err) => {return err});
    }

  	render() {

    	return (

      		<div className="App">

      			<div className="title">Music Master</div>

      			<FormGroup>
	              	<InputGroup>
	                    <FormControl type="text"
	                                 placeholder="Search an artist" 
	                                 value={this.state.query}
	                                 onChange={e => {this.setState({query: e.target.value})}} 
	                                 onKeyPress={e => {e.key === 'Enter' ? this.search() : ''}} />
	                        
	                    <InputGroup.Addon onClick={() => this.search()}>
	                        <Glyphicon glyph="search" />
	                    </InputGroup.Addon>

	              	</InputGroup>
                </FormGroup>

                { this.state.artist !== null 
                	? <div>	
	      				<Profile artist={this.state.artist} />
	      				<Gallery tracks={this.state.tracks} />
	      			</div>
      				: <div></div>
      			}

      		</div>
    	);
  	}
}
