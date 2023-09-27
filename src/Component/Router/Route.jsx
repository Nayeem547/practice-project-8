import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import MainLayout from "../Layout/mainLayout";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import Donate from "../Donate/Donate";

const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch('../../../public/category.json')
            },
            {
                path : "/Donation",
                element : <Donation></Donation>
            },
            {
                path : "/Statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/category/:id",
                element : <Donate></Donate>,
                loader : ()=>fetch('/category.json')
            }
        ]
    }
]) 

export default myCreatedRoute;