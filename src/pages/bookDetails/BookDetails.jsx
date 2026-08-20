import { useLoaderData, useParams } from "react-router";

export const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();

  console.log(typeof bookParamsId, "id");

  const books = useLoaderData();

  console.log("books", books);

  const expectedBook = books.find(
    (book) => book.bookId === Number(bookParamsId)
  );

  console.log(expectedBook, "expectedBook");

  
  if (!expectedBook) {
    return (
      <div className="container mx-auto my-20 text-center">
        <h2 className="text-3xl font-bold">Book Not Found</h2>
        <p className="mt-3">The book you are looking for does not exist.</p>
      </div>
    );
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-base-100 shadow-sm container mx-auto my-10 p-6 rounded-xl">
      
      {/* Book Image */}
      <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl p-8">
        <img
          src={image}
          alt={bookName}
          className="h-[400px] w-auto max-w-full object-contain rounded-xl"
        />
      </figure>

      {/* Book Information */}
      <div className="card-body space-y-3">

        <h2 className="card-title text-3xl">
          {bookName}
        </h2>

        <h3 className="text-xl font-semibold">
          By: {author}
        </h3>

        <p className="py-3 border-y">
          <span className="font-semibold">Category:</span> {category}
        </p>

        <p>
          <span className="font-semibold">Review:</span> {review}
        </p>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <div
              key={index}
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
            <span className="font-semibold">{totalPages}</span>
          </div>

          <div className="flex justify-between items-center">
            <span>Publisher:</span>
            <span className="font-semibold">{publisher}</span>
          </div>

          <div className="flex justify-between items-center">
            <span>Publish year:</span>
            <span className="font-semibold">{yearOfPublishing}</span>
          </div>

          <div className="flex justify-between items-center">
            <span>Rating:</span>
            <span className="font-semibold">{rating}</span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button className="btn btn-primary">
              Read
            </button>

            <button className="btn btn-primary">
              WishList
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};