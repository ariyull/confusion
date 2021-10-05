import logo from './brownbunny.png';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents';
import DrinkMenu from './components/DrinkComponents';
import './App.css';
import { DISHES } from './shared/dishes';
import { DRINKS } from './shared/drinklist';
import { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes : DISHES,
      drinks: DRINKS
    }
  }

  render() {

    return (
      <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">
                <img src={logo} className="App-logo" alt="logo"/>
                Ristaurauntay Con-Fusion  
              </NavbarBrand> 
            </div> 
          </Navbar> 

          <Menu dishes = {this.state.dishes} />


          <DrinkMenu drinks = {this.state.drinks} />

      </div>
    );
  }
}

export default App;
