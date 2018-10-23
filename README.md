# MyReads Project

## Table of Contents

+ Description of Project
+ Instructions
+ Backend Server
+ Important
+ Dependencies
+ Resources
+ Contributing

## Description of PROJECT

A book tracking application, allowing user to dynamically store books in different shelves (currently reading, want to read, and read) using component state and built using React.

## Instructions

To get started developing right away:
* Clone the repository from https://github.com/kanagavarshini/My-Reads
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Dependencies

This project uses React, React-router-dom, prop-types

## Resources

+ Udacity classroom lessons
+ Webinar: MyReads (P6 LONG) Sept-22 walk-thru with @RyanWaite.ProjectCoach [FEND, MWS] - YouTube
+ EMEA MyReads (Maeva) Walk-Thru (narration begins at 4:40) - YouTube

## Contributing

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
