import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("h1", {}, [
    React.createElement("div", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Fool" }),
    React.createElement(Pet, { name: "Tuna", animal: "Bird", breed: "Dool" }),
    React.createElement(Pet, { name: "Duna", animal: "Dog", breed: "Lool" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
