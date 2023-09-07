// Hello world with javascript

// let heading = document.createElement("h1");
// heading.innerHTML = "Hello World With javascript";
// let root = document.getElementById("root");
// root.append(heading)

// Hello World with React

// const heading = React.createElement("h1",{id:"heading"},"Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// nesting mutiple elements and also sibling elements

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Hello World From React"),
    React.createElement("h2", { id: "heading" }, "Hello World From React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello World From React"),
    React.createElement("h2", { id: "heading" }, "Hello World From React"),
  ]),
]);
console.log(parent); // it will be an react object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // converts reaact object to htm tags to display in browser
