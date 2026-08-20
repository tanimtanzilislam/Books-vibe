import { MainLayout } from "../layout/MainLayout";
import { BookDetails } from "../pages/bookDetails/BookDetails";
import { Books } from "../pages/books/Books";
import ErrorPage from "../pages/errorPage/ErrorPage";
import { Homepage } from "../pages/homepage/Homepage";
import { createBrowserRouter } from "react-router";
 export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Homepage/>
      },{
        path:"/books",
        element:<Books/>,

      },
      {
        path:"/bookDetails/:id",
        Component:BookDetails,
        loader:()=>fetch("booksData.json")
      }
    ],
    errorElement:<ErrorPage/>
  },
  {
    path:"/books",
    element:"books"
  }
]);
