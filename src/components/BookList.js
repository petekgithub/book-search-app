import React from 'react'
import '../css/BookList.css'
import BookCard from './BookCard'


const BookList = (props) => {

    //map over all of the book items to create a new card for each one in the list
    const books = props.books.data.items.map((book) => {
        return (
            <div className='col col-lg-4 grid wrapper' key={book.id}>
                <BookCard 
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors[0]}
                    description={book.volumeInfo.description}
                    previewLink={book.volumeInfo.previewLink}
                    buyLink={book.buyInfo.buyLink}
                />
            </div>
        );
    })


  return (
    <div>{books}</div>
  )
}

export default BookList;