import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


export default class Search extends Component {

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
