import * as actionTypes from "./actionTypes"

export function addBook(book: IBook) {
  const action: BookAction = {
    type: actionTypes.ADD_BOOK,
    book,
  }

  return simulateHttpRequest(action)
}

export function removeBook(book: IBook) {
  const action: BookAction = {
    type: actionTypes.REMOVE_BOOK,
    book,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: BookAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}