import * as React from "react";

type Props = {
  saveBook: (book: IBook | any) => void;
};

export const AddBook: React.FC<Props> = ({ saveBook }) => {
  const [book, setBook] = React.useState<IBook | {}>();

  const handleBookData = (e: React.FormEvent<HTMLInputElement>) => {
    setBook({
      ...book,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const addNewBook = (e: React.FormEvent) => {
    e.preventDefault();
    saveBook(book);
  };

  return (
    <form onSubmit={addNewBook} className="Add-book">
      <input
        type="text"
        id="title"
        placeholder="Book Name"
        onChange={handleBookData}
      />
       <input
        type="text"
        id="isbn"
        placeholder="Book ISBN No"
        onChange={handleBookData}
      />
      <input
        type="text"
        id="body"
        placeholder="Book Detail"
        onChange={handleBookData}
      />
      <button disabled={book === undefined ? true : false}>
        Add Book
      </button>
    </form>
  );
};
