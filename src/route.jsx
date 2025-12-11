import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from './pages/home/Home.jsx';
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/auth/login/Login.jsx";
import Register from './pages/auth/register/Register.jsx';
import NotFound from "./pages/notFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {
      // path :'/',
        index:true,
        element :<Home/>
      },
      {
        path :'*',
        element:<NotFound/>
      },
    ],
  },
  {
    path:"/auth",
    element:<AuthLayout/>,
    children:[
      {
        path: "login",
        element: <Login/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path :'*',
        element:<NotFound/>
      },
    ],
  },
]);
export default router;