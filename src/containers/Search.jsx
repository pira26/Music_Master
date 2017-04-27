import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


export default class Search extends Component {

      constructor(props) {
            super(props);
            this.state = {
                  query: ''
            }     
      }

      search() {
            console.log(this.state);
            const BASE_URL = "https://api.spotify.com/v1/search?";
            const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
            console.log("fetch:", FETCH_URL); 
      }

      render() {
            return(
                  <div>
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
                  </div>
            );
      }
}
