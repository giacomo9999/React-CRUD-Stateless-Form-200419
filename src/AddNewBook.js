import React from "react";

const AddNewBook = (props) => {
  return (
    <div className="container-inner">
      <h2>Add New Book</h2>
      <form className="h-form" onSubmit={props.addBook}>
        <label className="h-label">Title</label>
        <input
          className="h-input"
          type="text"
          name="tempTitle"
          value={props.tempTitle}
          onChange={props.handleInputUpdate}
        />
        <label className="h-label">Publication Year</label>
        <input
          className="h-input"
          type="text"
          name="tempPubYear"
          value={props.tempPubYear}
          onChange={props.handleInputUpdate}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddNewBook;
