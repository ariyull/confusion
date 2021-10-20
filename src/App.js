
import Main from './components/MainComponent';
import './App.css';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';



class App extends Component {

  render() {

      return (
      <BrowserRouter>
      <div className="background">
        <div className="row">
        <Main/>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
