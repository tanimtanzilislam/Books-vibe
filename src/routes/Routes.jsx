import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layout/MainLayout";
import BookDetails from "../pages/bookDetails/BookDetails";
import { Books } from "../pages/books/Books";
import ErrorPage from "../pages/errorPage/ErrorPage";
import { Homepage } from "../pages/homepage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Homepage />,
      },

      {
        path: "/books",
        element: <Books />,
      },

      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
]);