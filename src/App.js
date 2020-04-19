import React, { Component } from "react";

import "./App.css";

import BooksList from "./BooksList";
import AddNewBook from "./AddNewBook";
import EditBook from "./EditBook";

class App extends Component {
  state = {
    editPanelOpen: false,
    runningIdVal: 4,
    tempId: null,
    tempTitle: "",
    tempPubYear: "",
    bookData: [
      { id: 1, title: "The Eyes Of The Overworld", pubYear: 1967 },
      { id: 2, title: "Foundation", pubYear: 1948 },
      { id: 3, title: "The Hobbit", pubYear: 1932 },
    ],
  };

  handleInputUpdate = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  closeEditPanel = () => {
    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempTitle: "",
      tempPubYear: "",
    });
  };

  addBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: this.state.runningIdVal,
      title: this.state.tempTitle,
      pubYear: this.state.tempPubYear,
    };
    this.setState({
      runningIdVal: this.state.runningIdVal + 1,
      tempTitle: "",
      tempPubYear: "",
      bookData: [...this.state.bookData, newBook],
    });
  };

  editBook = (book) => {
    console.log(`editBook...${book}`);
    this.setState({
      editPanelOpen: true,
      tempId: book.id,
      tempTitle: book.title,
      tempPubYear: book.pubYear,
    });
  };

  updateBook = (e) => {
    e.preventDefault();

    const updatedBook = {
      id: this.state.tempId,
      title: this.state.tempTitle,
      pubYear: this.state.tempPubYear,
    };

    const updatedBookData = this.state.bookData.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );

    this.setState({ bookData: updatedBookData });
    this.closeEditPanel();
  };

  deleteBook = (id) => {
    console.log(`deleteBook...${id}`);
    this.setState({
      bookData: this.state.bookData.filter((book) => book.id !== id),
    });
  };

  render() {
    return (
      <div className="container-outer">
        <BooksList
          bookData={this.state.bookData}
          editBook={this.editBook}
          deleteBook={this.deleteBook}
        />
        {this.state.editPanelOpen ? (
          <EditBook
            tempTitle={this.state.tempTitle}
            tempPubYear={this.state.tempPubYear}
            handleInputUpdate={this.handleInputUpdate}
            updateBook={this.updateBook}
            closeEditPanel={this.closeEditPanel}
          />
        ) : (
          <AddNewBook
            tempTitle={this.state.tempTitle}
            tempPubYear={this.state.tempPubYear}
            handleInputUpdate={this.handleInputUpdate}
            addBook={this.addBook}
          />
        )}
      </div>
    );
  }
}

export default App;
