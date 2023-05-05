import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layouts/LoginLayouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceLayout from "../Layouts/ServiceLayout/ServiceLayout";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginLayout></LoginLayout>,
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
      path: "services",
      element: <ServiceLayout></ServiceLayout>,
      loader: ()=> fetch("http://localhost:5000/chefs"),
      children: [
        // {
        //   path: "services",
        //   element: <Services></Services>,
        // },
        {
          path: ":id",
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ({params}) => (fetch(`http://localhost:5000/chefs/${params.id}`))
        }
      ],
    },
  ]);
  
  export default router;