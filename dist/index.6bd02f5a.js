const child = React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag")
]);
const parent = React.createElement("div", {
    id: "parent"
}, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
