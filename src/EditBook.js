import React from "react";

const EditBook = (props) => {
  return (
    <div className="container-inner">
      <h2>Edit Book</h2>
      <form className="h-form">
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
        <button onClick={props.updateBook}>Submit</button>
        <button onClick={props.closeEditPanel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditBook;
