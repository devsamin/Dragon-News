import { createBrowserRouter, Navigate } from "react-router-dom"
import HomeLayout from "../Layouts/HomeLayout"
import CategoryNews from "../Pages/CategoryNews"
import AuthLayout from "../Layouts/AuthLayout"



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
                
            }
        ]
    },
    {
        path : '/news',
        element : <h1>news</h1>
    },
    {
        path : '/auth',
        element : <AuthLayout></AuthLayout>,
        children : [
            {
                path : '/auth/login',
                element : <h2>Login</h2>
            },
            {
                path : '/auth/register',
                element : <h2>Register</h2>
            }
        ]
    },
    {
        path : '*',
        element : <h1>Error</h1>
    }
])

export default router