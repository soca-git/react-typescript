import React from 'react';


// interfaces do not exist in JS, only in TypeScript!
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
