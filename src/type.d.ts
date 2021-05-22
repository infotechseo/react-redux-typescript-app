interface IBook {
    id: number
    isbn: string
    title: string
    body: string
  }
  
  type BookState = {
    books: IBook[]
  }
  
  type BookAction = {
    type: string
    book: IBook
  }
  
  type DispatchType = (args: BookAction) => BookAction
  