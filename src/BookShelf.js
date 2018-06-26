import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
// import PropTypes from 'prop-types';
// import escapeRegExp from 'escape-string-regexp';
// import sortBy from 'sort-by';

class BookShelf extends Component {
	state ={
		books:[],
    getId:[],
    updating:0,
	}

	componentDidMount() {
		BooksAPI.getAll().then((books)=>this.setState({books}))
		// const a=BooksAPI.getAll()
		// console.log(a)

	}

  // BookShelfStateUpdate = (book,shelf,fn)=>{
  //   fn(book,shelf)
  //   this.setState((state)=>({books:state.books,updating:1}))
  //     // return({

  //     // })
  //   // })
  // }

	render() {
    let image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlk4n3C8Cinc5WnUJX2wVksQzj22Hp89KX0JpkpZlnnqWfZpwB";
		return(
			<div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelf}</h2>
          <div className="bookshelf-books">
              <ol className="books-grid card">
                {this.props.books.map((book,index)=>(
                  <li key={index} className="card-body">
                    <div className="book card-inner" title={book.subtitle} >
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,backgroundPosition: 'center', backgroundImage: `url(${(book.imageLinks) ? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail : image})` }}></div>
                        <div className="book-shelf-changer">
                          <select value={book.shelf} onChange={(event)=>this.props.onUpdate(book,event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title" title={book.subtitle} >{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                      <a href={book.infoLink} target="_tab" className="btn btn-info pull-right">Link</a>
                    </div>
                  </li>
                ))}
              </ol>              
          </div>
        </div>         
			</div>
		)
	}
}

export default BookShelf;






























        // <div className="bookshelf">
        //   <h2 className="bookshelf-title">Want to Read</h2>
        //   <div className="bookshelf-books">
        //     <ol className="books-grid">
        
        //     </ol>
        //   </div>
        // </div>


        // <div className="bookshelf">
        //   <h2 className="bookshelf-title">Read</h2>
        //   <div className="bookshelf-books">
        //     <ol className="books-grid">
        
        //     </ol>
        //   </div>
        // </div>