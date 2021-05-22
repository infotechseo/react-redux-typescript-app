import  * as actionTypes from "./actionTypes"

const initialState: BookState = {
  books: [
    {
      id: 1,
      isbn: "9339212096",
      title: "Java",
      body: "Java is an open source language, its very good programming language.",
    },
    {
      id: 2,
      isbn: "9675545e45",
      title: "React",
      body: "React is front end development language",
    },
  ],
}


const reducer = (
    state: BookState = initialState,
    action: BookAction
  ): BookState => {
    switch (action.type) {
      case actionTypes.ADD_BOOK:
        const newBook: IBook = {
          id: Math.random(),
          isbn: "98887" + Math.random(), //random isbn number just for example
          title: action.book.title,
          body: action.book.body
        };
        return {
          ...state,
          books: state.books.concat(newBook)
        };
      case actionTypes.REMOVE_BOOK:
        const updatedBooks: IBook[] = state.books.filter(
          (book) => book.id !== action.book.id
        );
        return {
          ...state,
          books: updatedBooks
        };
    }
    return state;
  };
  
  export default reducer;
  