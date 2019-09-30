import React from 'react';

const person = (props) =>{
    //return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
return <p>Hello! My name is {props.name} and I am {props.age}</p>
};

export default person;