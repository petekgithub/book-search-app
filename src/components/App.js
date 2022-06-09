import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import BookList from './BookList'

export default class App extends Component{
    state = {
        books: []
    }


    // fetch function
    searchBooks = async(term) => {
        await fetch("https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key")
        .then(response => response.json())
        .then(result => {
      this.setState({ books: result.items})
      })}


  render() {

    if (this.state.books.length === 0) {
        return (
            <div>
                <SearchBar onSubmit={this.searchBooks}/>
            </div>

        )
    } else {
        return (
            <div>
                <SearchBar onSubmit={this.searchBooks}/>
                <BookList onSubmit={this.state.books}/>
            </div>
        )
    }

  }
}

