import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'


class BooksApp extends React.Component {
  state = {
    searchResults:[],
    updateResults:[],
    books:[],
    shelf:[],
    query:'',
    isUpdated:false,
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books)=>this.setState({books}))
    const a=BooksAPI.getAll()
    console.log(a)
  }

  updateSearchResults = (query) => {
    //console.log(query,this.state.searchResults,BooksAPI.search(query))
    if(query === ""){      
      const currentState = this.state;
      currentState.searchResults=[];
      this.setState(currentState)
      console.log(query);
    }else{
      BooksAPI.search(query)
      .then((data)=>{
        console.log(data)
        const currentState = this.state; 
        data.map((book)=>{
          const x = this.state.books.find((b)=>(b.id === book.id))
          book.shelf = (x) ? x.shelf : "none"
        })
        currentState.searchResults=data;
        this.setState(currentState)
      })
    }
  }

  updateBookShelf = (book,shelf) => {
    BooksAPI.update(book,shelf).then(()=>{
      book.shelf=shelf
      this.setState((state)=>({books:state.books.filter((b)=>b.id!==book.id).concat([book]),isUpdated: ! state.isUpdated}))
    })
  }

  getBooksOfShelf = (shelfName) => {
    return this.state.books.filter((book)=>book.shelf === shelfName)
  }



  render() {
    // const { searchResults,query }=this.state;
    const { updateSearchResults }=this;

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <Link exact to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text"                  
                  autoFocus="autofocus"
                  onChange={(event)=>updateSearchResults(event.target.value)}
                  placeholder="Search by title or author" />

              </div>
            </div>

            <div className="search-books-results">
            <Route exact path="/search" render={()=>(
                <SearchBooks
                  onTransfer={this.updateBookShelf}
                  query={this.state.query}      
                  searchResultsData={this.state.searchResults}          
                  books={this.state.books}
                />
              )} 
            />              
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title bg-primary">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Route path="/" render={()=>(
                <div>
                    <BookShelf onUpdate={this.updateBookShelf} shelf="Currently Reading"  books={this.getBooksOfShelf("currentlyReading")}/>
                    <BookShelf onUpdate={this.updateBookShelf} shelf="Want To Read" books={this.getBooksOfShelf("wantToRead")} />
                    <BookShelf onUpdate={this.updateBookShelf} shelf="Read" books={this.getBooksOfShelf("read")} />
                </div>
                )}
                
              />
              
            </div>

            <div className="open-search">            
                <Link exact to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>            
            </div>

          </div>
        )}        
      </div>
    )
  }
}

export default BooksApp





































// console.log("Shelf :",this.state.shelf,book,BooksAPI.update(book,shelf));
//     // const { books } =this.state;

//     // if(shelf==='none'){
//     //   this.setState((state)=>({
//     //         books:state.books.filter((b) => b.id !==book.id)
//     //   }))


// books={this.state.books.filter(book => book.shelf === 'wantToRead')}
//books={this.state.books.filter(book => book.shelf === 'read')}
                // <input 
                //   type="text"                  
                //   autofocus="autofocus"
                //   onChange={(event)=>updateSearchResults(event.target.value)}
                //   placeholder="Search by title or author" />                 

    // let showingBooks;
    // if(searchResults) {
    //   const match=new RegExp(escapeRegExp(this.state.query),'i')
    //   showingBooks=this.state.books.filter((book)=>match.test(book.title || book.authors))
    // } else {
    //   showingBooks=this.state.books;
    // }   

    // showingBooks.sort(sortBy('title')) 







//<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                // <a href="#"
                //   onClick={() => this.setState({ showSearchPage: true })} 
                  
                // </a>                            
                  // {this.state.searchResults.map((result,index)=>{
                  //   <li key={index} >{result.name}</li>
                  // })}                

                  // {this.state.searchResults.filter((result)=>{
                  //   <li>{result}</li>
                  // })}

                     //      {this.showingBooks.filter(result=>(
                    //   <li>
                    //     <p>{result.title}</p>
                    //     <p>{result.authors}</p>
                    //   </li>                      
                    // ))}
//onChange={(event)=>updateSearchResults(BooksAPI.search(event.target.value))} 