import React, { Component } from 'react'


export default class SearchBar extends Component{

    state = {
        term: ''
    };

    onFormSubmit = ((e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    });


  render() {

    return(
        <div className='searchpage'>
            <h1>Search Google Books</h1>
            <form onSubmit={this.onFormSubmit} className="bookform">
                <div>
                    <input 
                    type="text" 
                    placeholder="Search" 
                    value={this.state.term}
                    onChange={e => this.setState({ term: e.target.value })}
                />
                <i className='search'></i>
                </div>
            </form>
        </div>
    );
  }
}

