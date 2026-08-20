import { MainLayout } from "../layout/MainLayout";
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


      }
    ],
    errorElement:<ErrorPage/>
  },
  {
    path:"/books",
    element:"books"
  }
]);
