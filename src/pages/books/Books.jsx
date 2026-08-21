import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

export const Books = () => {
  const { storedBooks,wishList } = useContext(BookContext);

  console.log(storedBooks,wishList "booksContext");

  return (
    <div className="container mx-auto">
      read List:{storedBooks.length} <br/>
       wish List:{wishList.length}
    </div>
  );
};