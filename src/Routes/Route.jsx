import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layouts/LoginLayouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceLayout from "../Layouts/ServiceLayout/ServiceLayout";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage";
import BlogCard from "../Pages/BlogCard/BlogCard";
import Terms from "../Pages/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Navigate to={'/services'}></Navigate>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: '/terms',
        element: <Terms></Terms>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
        loader: () => (fetch(`https://taste-of-japan-server.vercel.app/blogs`)),
        children: [
          {
            path: ':id',
            element: <BlogCard></BlogCard>,
            loader: ({ params }) => (fetch(`https://taste-of-japan-server.vercel.app/blogs/${params.id}`)),
            errorElement: <ErrorPage></ErrorPage>
          }
        ]
      },
    ],
  },
  {
    path: '*',
    element: <h3 className='font-bold text-4xl m-8'>404 Not found!</h3>
  },

  {
    path: "services",
    element: <ServiceLayout></ServiceLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("https://taste-of-japan-server.vercel.app/chefs"),
    children: [
      {
        path: ":id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: ({ params }) => (fetch(`https://taste-of-japan-server.vercel.app/chefs/${params.id}`))
      }
    ],
  }

]);

export default router;