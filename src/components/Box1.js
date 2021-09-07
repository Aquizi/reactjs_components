import React from "react";

function Box1() {

    const name = React.useState("Jack");

    return (
        <div className={"box1"}>
            <h1>Name: {name}</h1>
        </div>
    )
}

export default Box1;

