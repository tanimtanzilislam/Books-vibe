import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BookContext } from "../../context/BookContext";

const BookDetails = () => {
  const { id: bookParamsId } = useParams();

  const books = useLoaderData();

  const expectedBook = books.find(
    (book) => book.bookId === Number(bookParamsId)
  );

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const {
    handleMarkAsRead,
    handleWishList,
  } = useContext(BookContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8 rounded-xl overflow-hidden">

      {/* Book Image */}
      <figure className="w-full flex items-center justify-center bg-gray-100 p-8">
        <img
          src={image}
          alt={bookName}
          className="h-[400px] object-contain rounded-lg"
        />
      </figure>

      {/* Book Information */}
      <div className="card-body space-y-3">

        {/* Book Name */}
        <h2 className="card-title text-2xl">
          {bookName}
        </h2>

        {/* Author */}
        <h3 className="font-semibold">
          By: {author}
        </h3>

        {/* Category */}
        <p className="py-2 border-y">
          {category}
        </p>

        {/* Review */}
        <p>
          <span className="font-semibold">
            Review:
          </span>{" "}
          {review}
        </p>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge text-green-500 bg-green-100 font-bold"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Book Details */}
        <div className="border-t pt-4 space-y-3">

          <div className="flex justify-between items-center">
            <span>Number of pages:</span>

            <span className="font-semibold">
              {totalPages}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span>Publisher:</span>

            <span className="font-semibold">
              {publisher}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span>Publish year:</span>

            <span className="font-semibold">
              {yearOfPublishing}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 pt-3">

            <button
              className="btn"
              onClick={() =>
                handleMarkAsRead(expectedBook)
              }
            >
              Mark as Read
            </button>

            <button
              className="btn btn-primary"
              onClick={() =>
                handleWishList(expectedBook)
              }
            >
              Add to Wishlist
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;