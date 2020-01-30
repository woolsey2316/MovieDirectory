import React, { Component } from 'react';

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false, 
            rows: [], 
            type: props.type
        };
    }
    render() {
        return (
            <div 
              id="searchHeader" 
              className="header" 
              position={this.state.scrollingLock ? 'fixed' : 'relative'}
            >
            <img 
                className="appLogo" 
                src="./ticket.svg" 
                alt="ticket" 
                href="https://www.flaticon.com/authors/freepik"
            />
            <input 
                className="searchBar" 
                placeholder="Search for Movies..." 
                onChange={this.props.searchChangeHandler}
            />
            </div>
        )
    }
}

export default SearchBar;