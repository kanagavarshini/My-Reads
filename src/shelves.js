import React, { Component } from 'react';
import Book from './book';
import PropTypes from 'prop-types'
export default class Shelves extends Component {
	static propTypes = {
	    books: PropTypes.array.isRequired,
	    onUpdateShelf: PropTypes.func.isRequired
    }
    render() {
	    return ( 
	    	<div className="bookshelf">
	            <h2 className="bookshelf-title">{this.props.title}</h2>
	                <div className="bookshelf-books">
	                    <ol className="books-grid">
	                      
	                       {this.props.books.filter(book => book.shelf === this.props.shelf).map((book, index) => (<Book book={book} key={index} onUpdateShelf={this.props.onUpdateShelf}/>))}
	                     
	                    </ol>

	                </div>
	        </div>
	                
	    );
	  }
}

