import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import "./index.css";

import { Book } from "./components/Book";
import { AddBook } from "./components/AddBook";
import { addBook, removeBook } from "./store/actionCreators";
import { Dispatch } from "redux";

const App: React.FC = () => {
  const books: readonly IBook[] = useSelector(
    (state: BookState) => state.books,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveBook = React.useCallback(
    (book: IBook) => dispatch(addBook(book)),
    [dispatch]
  );

  return (
    <main>
      <h1>Library Books</h1>      
      {books.map((article: IBook) => (
        <Book
          key={article.id}
          book={article}
          removeBook={removeBook}
        />
      ))}
      <AddBook saveBook={saveBook} />
    </main>
  );
};

export default App;