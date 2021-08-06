import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Message from './Message';


// 'extends' means inherit.
// If unspecified, the type of Component is any.
class App extends Component {

  // This method is called prior to the component being rendered.
  // Therefore it would be a good place to call an API for the data,
  // so that it is returned and ready before rendering the component.
  componentWillMount() {
    console.log('Component mounting...')
  }

  componentDidMount() {
    console.log('Component mounted!')
  }

  render() {
    let firstValue : string;
    firstValue = 'Seán';
    let aNumber : number = 19;

    // two ways to declare an array.
    // let someNumbers : number[] = [1, 2, 3, 4, 5];
    let someNumbers : Array<number> = [1, 2, 3, 4, 5];

    // tuple with multi types.
    let aTuple : [string, number] = ['123', 123];

    // enum
    enum Codes {first = 1, second = 2};

    // any, avoid using, defeats purpose of TypeScript!
    // let firstName : any = 'Seán';
    let firstName : any = 123;

    // void return type (functions should have a return type in TypeScript!)
    const warning = () : void => {
      console.log('Warning!');
    }

    // number return type
    const addTwoNumbers = (a : number, b : number) : number => {
      return a + b;
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This project is using TypeScript!</p>
          <p>The value {firstValue} is of type {typeof firstValue}!</p>
          <p>The value of {aNumber} is of type {typeof aNumber}!</p>
          <p>{someNumbers}</p>
          <Message message='This is a simple message'/>
        </header>
      </div>
    );
  }
}

export default App;
