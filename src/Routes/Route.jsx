import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layouts/LoginLayouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceLayout from "../Layouts/ServiceLayout/ServiceLayout";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage";
import Services from "../Pages/Services/Services";

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
          path: '/blog',
          element: <Blog></Blog>
      }
      
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
      loader: ()=> fetch("https://taste-of-japan.vercel.app/chefs"),
      children: [
        {
          path: "services",
          element: <Services></Services>,
        },
        {
          path: ":id",
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ({params}) => (fetch(`https://taste-of-japan.vercel.app/chefs/${params.id}`))
        }
      ],
    },
  ]);
  
  export default router;