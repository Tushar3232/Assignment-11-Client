import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddFood from "../Pages/AddFood";
import AvailableFoods from "../Pages/AvailableFoods";
import FoodDetails from "../Pages/FoodDetails";
import axios from "axios";
import MyFoods from "../Pages/MyFoods";
import UpdateFood from "../Pages/UpdateFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import PrivateRoute from "./PrivateRoute";
import UserDashboard from "../Pages/Dashboard/UserDashboard";
import Blogs from "../Pages/Blogs";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
        {
        path: "/user-dashboard",
        element: <PrivateRoute>
          <UserDashboard></UserDashboard>
        </PrivateRoute>
      },
      {
        path: "/addfood",
        element: <PrivateRoute>
          <AddFood></AddFood>
        </PrivateRoute>
      },
      {
        path:"/myfoods",
        element: <PrivateRoute>
          <MyFoods></MyFoods>
        </PrivateRoute>
      },
    
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch(`https://assignment-11-server-bay-psi.vercel.app/available-foods`)

      },
      {
        path: "/details/:foodId",
        element: <PrivateRoute>
          <FoodDetails></FoodDetails>
        </PrivateRoute>,
        loader: async ({ params }) =>{
          const {data}= await axios.get(`https://assignment-11-server-bay-psi.vercel.app/detailsFood/${params.foodId}`)
          return data
        }
        },
        {
          path:"/updateFood/:foodId",
          element: <UpdateFood></UpdateFood>,
          loader: async ({params}) =>{
             const {data}= await axios.get(`https://assignment-11-server-bay-psi.vercel.app/detailsFood/${params.foodId}`)
          return data
          }
          
        },
        {
          path: "/myfoddrequsted",
          element: <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        },
        {
          path:"/bogs",
          element: <Blogs></Blogs>
        }
    ]
  },
]);

export default router;