import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from './pages/home/Home.jsx';
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/auth/login/Login.jsx";
import Register from './pages/auth/register/Register.jsx';
import NotFound from "./pages/notFound/NotFound.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import Products from "./pages/products/Products.jsx";
import Cart from "./pages/cart/Cart.jsx";
import SendCode from "./pages/auth/sendCode/SendCode.jsx";
import ResetPassword from './pages/auth/resetPassword/ResetPassword.jsx';
import Profile from "./pages/profile/Profile.jsx";
import GuestRouter from "./protectedRoute/GuestRouter.jsx";
import ProtectedRouter from "./protectedRoute/ProtectedRouter.jsx";
 
const router = createBrowserRouter([
  //layout1
  {
    path: "/",
    element:<MainLayout/>,
    // errorElement: errorBage,
    children:[
      {
      // path :'/',
        index:true,
        element :<Home/>
      },
      {
        path:'about',
        element:<AboutUs/>
      },
      {
        path:'products',
        element:<Products/>
      },
      {
        path:'cart',
        element:
        <ProtectedRouter>
          <Cart/>
        </ProtectedRouter>
      },
      {
        path:'profile',
        element:
        <ProtectedRouter>
          <Profile/>
        </ProtectedRouter>
      },
      {
        path :'*',
        element:<NotFound/>
      },
    ],
  },
  //layout2
  {
    path:"/auth",
    element:<AuthLayout/>,
    children:[
      {
        path: "login",
        element: 
        <GuestRouter>
          <Login/>
        </GuestRouter>
      },
      {
        path:"register",
        element:
        <GuestRouter>
          <Register/>
        </GuestRouter>
      },
      {
        path:"sendCode",
        element:
        <GuestRouter>
          <SendCode/>
        </GuestRouter>
      },
       {
        path:"resetPassword",
        element:
        <GuestRouter>
          <ResetPassword/>
        </GuestRouter>
      },
      {
        path :'*',
        element:<NotFound/>
      },
    ],
  },
]);
export default router;