import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default"
            }
        };
        console.log(props.name+ "Child Constructor");
    }

    async componentDidMount() {
        console.log(this.props.name + "Child ComponentDidMount");
        const data = await fetch("https://api.github.com/users/sharibkamal");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json
        });
    }

    render() {
        console.log(this.props.name + "Child render");
        const { name, location } = this.state.userInfo;

        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h1>Location: {location}</h1>
                <h1>Contact: kamalsharib@gmail.com</h1>
            </div>
        );
    }
}

export default UserClass;