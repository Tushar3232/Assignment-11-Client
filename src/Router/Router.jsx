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
        path: "/addfood",
        element: <AddFood></AddFood>
      },
      {
        path:"/myfoods",
        element: <MyFoods></MyFoods>
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch(`http://localhost:3000/available-foods`)

      },
      {
        path: "/details/:foodId",
        element: <FoodDetails></FoodDetails>,
        loader: async ({ params }) =>{
          const {data}= await axios.get(`http://localhost:3000/detailsFood/${params.foodId}`)
          return data
        }
        },
        {
          path:"/updateFood/:foodId",
          element: <UpdateFood></UpdateFood>,
          loader: async ({params}) =>{
             const {data}= await axios.get(`http://localhost:3000/detailsFood/${params.foodId}`)
          return data
          }
          
        }
    ]
  },
]);

export default router;