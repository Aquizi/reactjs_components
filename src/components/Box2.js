import React from "react";

function Box2(props){

    const [age, increaseAge]=React.useState(props.data.age);

    const setAge=()=>{
        increaseAge(props.data.age+=1)
    }

    return(
        <div className={"box2"} onClick={setAge}>
            <h2>Name: {props.data.name}</h2>
            <h2>I am {age} years old</h2>
            <h2>The coolest color is {props.data.color}</h2>
        </div>
    )
}

export default Box2;