import { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  addWishListToLocalDB,
  getAllReadListFromLocalDB,
  getAllWishListFromLocalDB,
} from "../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());
  const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = readList.some(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The book is already exist");
      return;
    }

    const updatedReadList = [...readList, currentBook];
    setReadList(updatedReadList);
    addReadListToLocalDB(currentBook);
    toast.success(`${currentBook.bookName} is added to read list`);
  };

  const handleWishList = (currentBook) => {
    const isExistInReadList = readList.some(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.error("This book is already in read list");
      return;
    }

    const isExistBook = wishList.some(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The book is already exist");
      return;
    }

    const updatedWishList = [...wishList, currentBook];
    setWishList(updatedWishList);
    addWishListToLocalDB(currentBook);
    toast.success(`${currentBook.bookName} is added to wish list`);
  };

  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;