import React from "react";

const BookList = (props) => {
  const BookTableData = props.bookData.map((book) => (
    <tr key={`BK_${book.id}`}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.pubYear}</td>
      <td>
        <button onClick={() => props.editBook(book)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteBook(book.id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div className="container-inner">
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Pub. Year</th>
          </tr>
        </thead>
        <tbody>{BookTableData}</tbody>
      </table>
    </div>
  );
};

export default BookList;
