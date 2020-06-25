import React, { Component } from 'react';
import Colorchanger from './colorchanger';
import ChangeColor from './colorchanger';

export default class App extends Component {
  render() {
    return (
      <div className='sun-color-generator'>
        <h1>Hover and click on the sun to change colors!</h1>
        <i className="fas fa-sun" onClick={ChangeColor}></i>
      </div>
    );
  }
}


