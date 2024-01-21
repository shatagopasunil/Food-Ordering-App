import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Body from "../src/components/Body";

const AppComponent = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppComponent/>);