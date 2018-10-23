import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './search';
import Home from './home';
class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount() {
      this.fetchBooks();
    }

    fetchBooks = () => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books });
      });
    }

    updateShelf = (book, shelf) =>  {
      BooksAPI.update(book, shelf).then(() => {
        this.fetchBooks();
      });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
          <Route exact path="/" render={() => (
            <Home books={books} onUpdateShelf={this.updateShelf}/>
          )}/>
          <Route path="/search" render={( {history} ) => (
          <SearchBooks 
            books={books}
            onUpdateShelf={(book,shelf) => {
              this.updateShelf(book,shelf);
              history.push('/');
            }}
          />
        )}/>
      </div>
    );
  }
}

export default BooksApp
