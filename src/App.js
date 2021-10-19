
import Main from './components/MainComponent';
import './App.css';
import { Component } from 'react';



class App extends Component {

  render() {

      return (
      <div className="background">
        <div className="row">
        <Main/>
        </div>
      </div>
    );
  }
}

export default App;
