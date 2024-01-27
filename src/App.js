import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppComponent = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);