import React, { Component } from 'react';
//import * as BooksAPI from './BooksAPI'
// import PropTypes from 'prop-types';
// import escapeRegExp from 'escape-string-regexp';
// import sortBy from 'sort-by';

class SearchBooks extends Component {

	render() {
		let image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlk4n3C8Cinc5WnUJX2wVksQzj22Hp89KX0JpkpZlnnqWfZpwB";
	    const { searchResultsData }=this.props;
    	// const { updateSearchResults }=this;

		return(
			<div>
				
				<h2 className="text-center">List of Books...</h2>
				<hr/>				
	            <ol className="books-grid card" >              
	                 {(searchResultsData.error) ? (<h3 className="text-danger">No Books Found </h3>)  : (searchResultsData.map((book,index)=>(
	                 	
	                 	
	                    <li key={index} className="card-body" title={book.subtitle}>	                     
	                      <div className="book card-inner">
	                        <div className="book-top">
	                          <div className="book-cover" style={{ width: 128, height: 193,backgroundPosition: 'center', backgroundImage: `url(${ (book.imageLinks) ? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail : image })` }}></div>
	                          <div className="book-shelf-changer">
	                            <select value={book.shelf} onChange={(event) => (this.props.onTransfer(book,event.target.value))}>	                            
	                              <option value="move" disabled>Move to...</option>	                              
	                              <option value="currentlyReading">Currently Reading</option>
	                              <option value="wantToRead">Want to Read</option>
	                              <option value="read">Read</option>
	                              <option value="none">None</option>
	                            </select>
	                          </div>
	                        </div>
	                        <div className="book-title">{book.title}</div>
	                        <div className="book-authors">{book.authors}</div>
	                        <a href={book.infoLink} target="_tab" className="btn btn-info pull-right">Link</a>
	                      </div>
	                    </li>
	                  )))}

	              </ol>
			</div>
		)
	}
}

export default SearchBooks;
























































 //  state={
 //    searchResults:[],
	// query:'',
 //  }

  // updateSearchResults = (query) => {
  //   console.log(query,this.state)
  //   if(query==""){      
  //     const currentState = this.state;
  //     currentState.searchResults=[];
  //     this.setState(currentState)
  //     console.log(query);
  //   }else{
  //     const response=BooksAPI.search(query)
  //     .then(data=>{
  //       console.log(data)
  //       const currentState = this.state;
  //       currentState.searchResults=data;
  //       this.setState(currentState)
  //     })
  //     console.log("JSON Data");
  //   }
  // }	
