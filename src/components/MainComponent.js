import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { DRINKS } from '../shared/drinklist';
import Menu from './MenuComponents';
import DrinkMenu from './DrinkComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotions';
import { LEADERS } from '../shared/Leaders';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      drinks: DRINKS,
      selectedDishId: null,
      selectedDrinkId: null,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
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
        <Header />
        <Switch>

          <Route path='/home' component={() => 
              <Home 
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
             />
          }/>

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

           <Route exact path='/contactus' component={Contact} />

          <Redirect to="/home" />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;


