import React from 'react';
import { example } from 'yargs';
import CreateMessageHoc from './Hoc';


// Interfaces do not exist in JS, only in TypeScript!
interface UserMessage {
    name : string,
    message : string
}


// We can specify that the return type here is any (JSX),
// but TypeScript infers the return value is any if its not specified.
const Message = (props : UserMessage) : any => {
    return (
        <p>{props.name}: {props.message}</p>
    );
}

export default Message;


// ExampleMessage component for HOC chapter.
const ExampleMessage = (props: UserMessage): any => <p>{props.name}: {props.message}</p>

// Passing ExampleMessage component to CreateMessageHoc function
// which is returning the HOC class component.
export const HocMessage = CreateMessageHoc(ExampleMessage);
