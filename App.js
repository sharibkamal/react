import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./static/logo.jpg";

// JSX is transpiled before it reaches the JS - PARCEL -Babel
// JSX =>Babel transpiles it to React.createElement => React.createElement-JS object => HTML Element(render)

// const jsxHeading = (
//     <h1 className="heading" tabIndex="1">
//         Hello React using JSX
//     </h1>
// );

// const Title = () => (
//     <h1 className="head" tabIndex="1">
//         Hello React from JSX
//     </h1>
// );

// const HeadingComponent = () => { return (
//     <div id="component">
//         <Title />
//         <h1 className="heading">Hello React from functional components</h1>
//     </div>
// )};

// console.log(HeadingComponent);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HeadingComponent />);


// Assignment 3

const header = React.createElement("div", {className: "title"}, [
    React.createElement("h1", {}, "This is h1 from React"),
    React.createElement("h2", {}, "This is h2 from React"),
    React.createElement("h3", {}, "This is h3 from React")
]);

const jsxHeader = <div className="title">
    <h1 className="heading" tabIndex="1">This is h1 from JSX</h1>
    <h2 className="heading" tabIndex="1">This is h2 from JSX</h2>
    <h3 className="heading" tabIndex="1">This is h3 from JSX</h3>
</div>

const Title = () => (
    <h1 className="heading">
        Sharib Kamal
    </h1>
);
const HeaderComponent = () => (<div className="title">
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="heading" tabIndex="1">This is h1 from functional component</h1>
    <h2 className="heading" tabIndex="1">This is h2 from functional component</h2>
    <h3 className="heading" tabIndex="1">This is h3 from functional component</h3>
</div>);

// const HeaderComponent = () => jsxHeader;


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
// root.render(jsxHeader);
// root.render(<HeaderComponent />);

const HeaderComponent2 = () => (
    <div className="header">
        <div id="logo">
            <img src={logo} className="logo" alt="Logo"></img>
        </div>
        <div id="search">
            <input type="text" placeholder="Search.."></input>
        </div>
        <div id="icon">
            <i className="fas fa-home"></i>
        </div>
    </div>
);

root.render(<HeaderComponent2 />);