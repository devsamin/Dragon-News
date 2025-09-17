import { createBrowserRouter, Navigate } from "react-router-dom"
import HomeLayout from "../Layouts/HomeLayout"
import CategoryNews from "../Pages/CategoryNews"
import AuthLayout from "../Layouts/AuthLayout"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import NewsDetails from "../Pages/NewsDetails"
import PrivetRoute from "./PrivetRoute"
import Loding from "../Pages/Loding"



const router = createBrowserRouter([
    {
        path : '/',
        element : <HomeLayout/>,
        children : [
            {
                index: true,   
                element: <Navigate to="/category/01" replace />
            },
            {
                path : '/category/:id',
                element : <CategoryNews></CategoryNews>,
                loader : ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                hydrateFallbackElement : <Loding></Loding>
                
            }
        ]
    },
    {
        path : '/news/:id',
        element : <PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>,
        loader  : ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
        
    },
    {
        path : '/auth',
        element : <AuthLayout></AuthLayout>,
        children : [
            {
                path : '/auth/login',
                element : <Login></Login>
            },
            {
                path : '/auth/register',
                element : <Register></Register>
            }
        ]
    },
    {
        path : '*',
        element : <h1>Error</h1>
    }
])

export default router