import React from 'react'

const BookCard = (props) => {
    return (
        <div>
            <div className='image'>
                <img src= {props.image} alt={props.title} />
            </div>
            <div className='content'>
                <h2 className='header'>{props.title}</h2>
                <div className='meta'>
                    <span className='date'>Written by {props.author}</span>
                </div>
                <div className='description'>
                    {props.description}
                </div>
            </div>
            <div>
                <a href={props.previewLink} target="_blank" rel="noreferrer" >
                <button className='secondBtn'>Preview</button>
                </a>
                <a href={props.previewLink} target="_blank" rel="noreferrer" >
                <button className='firstBtn'>Buy Me!</button>
                </a>
            </div>
        </div>
    );
}

export default BookCard