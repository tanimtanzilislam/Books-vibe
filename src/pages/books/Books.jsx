import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

export const Books = () => {
  const { storedBooks } = useContext(BookContext);

  console.log(storedBooks, "booksContext");

  return (
    <div>
      Listed Books
    </div>
  );
};