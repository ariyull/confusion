import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { DRINKS } from '../shared/drinklist';
import Menu from './MenuComponents';
import DrinkMenu from './DrinkComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      drinks: DRINKS,
      selectedDishId: null,
      selectedDrinkId: null
    };

    this.onDishSelect = this.onDishSelect.bind(this)
    this.onDrinkSelect = this.onDrinkSelect.bind(this)
  }

  onDishSelect(dishId) {
    this.setState({ selectedDishId: dishId });
  }

  onDrinkSelect(drinkId) {
    this.setState({selectedDrinkId: drinkId})
}

  render() {
    const HomePage = () => {
      return(
          <Home />
      );
    }




    return (
      
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => 
            <Menu dishes={this.state.dishes} 
                  selectedDishId={this.state.selectedDishId} 
                  onClick={this.onDishSelect} />
          }/>
          <Route exact path='/drinkmenu' component={() => 
            <DrinkMenu drinks ={this.state.drinks} 
                  selectedDrinkId={this.state.selectedDrinkId} 
                  onClick={this.onDrinkSelect} />
          }/>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;


