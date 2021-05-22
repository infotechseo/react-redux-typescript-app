import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  book: IBook;
  removeBook: (book: IBook) => void;
};

export const Book: React.FC<Props> = ({ book, removeBook }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteBook = React.useCallback(
    (book: IBook) => dispatch(removeBook(book)),
    [dispatch, removeBook]
  );

  return (
    <div className="Book">
      <div>
        <h1>{book.title}</h1>
        <p><strong>ISBN:</strong> {book.isbn}</p>
        <p><strong>Detail:</strong> {book.body}</p>
      </div>
      <button onClick={() => deleteBook(book)}>Remove</button>
    </div>
  );
};
