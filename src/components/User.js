import { useState } from "react";

const User = ({name, location}) => {
    const [count, setCount] = useState(0);
    const [count1] = useState(1);

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count1: {count1}</h1>
            <h1>Name: {name}</h1>
            <h1>Location: {location}</h1>
            <h1>Contact: kamalsharib@gmail.com</h1>
        </div>
    );
}

export default User;