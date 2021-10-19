import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { DRINKS } from '../shared/drinklist';
import NavComponent from './NavComponent'
import Menu from './MenuComponents';
import DrinkMenu from './DrinkComponents';


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
    return (
      <div>
        <NavComponent />
        <Menu 
          dishes={this.state.dishes} 
          selectedDishId={this.state.selectedDishId} 
          onClick={this.onDishSelect} />
        <DrinkMenu 
          drinks = {this.state.drinks}
          selectedDrinkId={this.state.selectedDrinkId}
          onClick={this.onDrinkSelect}  />
      </div>
    );
  }
}

export default Main;


