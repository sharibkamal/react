import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Error from "../src/components/Error"
import RestaurantMenu from "../src/components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
// import Grocery from "../src/components/Grocery";

const Grocery = lazy(() => import("../src/components/Grocery"));
const About = lazy(() => import("../src/components/About"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "about",
                element: <Suspense fallback={<h1>Loading...</h1>}>
                            <About />
                        </Suspense>
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}>
                            <Grocery />
                        </Suspense>
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);