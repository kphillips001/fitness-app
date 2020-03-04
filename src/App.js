import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Exercises from './components/Exercises';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Exercises />
        <Footer />
      </>
    );
  }
}
export default App;
