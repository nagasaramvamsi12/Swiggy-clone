import { useState } from "react";
const User=(props)=>
{
    const [Count]=useState(0);
     const [count2]=useState(1);
     const {name,location}=props;
    return (<div className="user-card">
        <h1>Count: {count}</h1>
         <h1>Count: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 8328193733</h4>

    </div>)
}
export default User;