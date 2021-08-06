import React, { Component } from "react";


// Interface to define expected state structure.
interface MyState {
    status: string,
    name: string,
    message: string
}

// Define a new readonly type using the interface.
type State = Readonly<MyState>;

// Define an initial state.
const initialState: State = {
    status: 'OK',
    name: 'Seán',
    message: 'Hello!'
};


// Create higher-order component.
// Wrapped component passed as a parameter.
const CreateMessageHoc = (WrappedComponent: any) => {

    class MessageHoc extends Component<{}, MyState> {
        // State attribute.
        readonly state: State = initialState;

        render() {
            return (
                // ExampleMessage component is placed here.
                <WrappedComponent name={this.state.name} message={this.state.message} />
            );
        }
    }

    return MessageHoc;
}

export default CreateMessageHoc;
