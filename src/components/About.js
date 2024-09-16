import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        console.log("Parent Constructor");

        super(props);
    }
    
    componentDidMount() {
        console.log("Parent ComponentDidMount");
    }

    render() {
        console.log("Parent render");

        return (
            <div className="about">
                <h1>About Us</h1>
                <h2>We are a food delivery app</h2>
                <UserClass name={"First"} location={"Kolkata"}/>
            </div>
        );
    }
}

export default About;