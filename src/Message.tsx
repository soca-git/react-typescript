import React from 'react';


// We can specify that the return type here is any (JSX),
// but TypeScript infers the return value is any if its not specified.
const Message = (prop : {message : string}) : any => {
    return (
        <p>{prop.message}</p>
    );
}

export default Message;
