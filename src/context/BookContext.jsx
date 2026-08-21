import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext(null);

export const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setwishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId
    );

    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to read list`);
    }

    console.log(currentBook, storedBooks, "bookId");
  };

    const handleWishList = (currentBook) => {

        const isExistBook=wishList.find((book)=>book.bookId===currentBook.bookId);
        if(isExistInReadList){
            toast.error("This book is already in read List");
            read;
        }
    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId
    );

    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setwishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to wish list`);
    }

    console.log(currentBook, storedBooks, "bookId");
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };

  return (
    <BookContext.Provider value={data}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;