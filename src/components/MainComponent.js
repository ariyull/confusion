import React, { Component } from 'react';

import Menu from './MenuComponents';
import DrinkMenu from './DrinkComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { SELECT_DISH, SELECT_DRINK } from '../redux/reducer';
import { store } from '../redux/configureStore';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { 
    dishes: state.dishes,
    drinks: state.drinks,
    comments: state.comments,
    selectedDishId: state.selectedDishId,
    selectedDrinkId: state.selectedDrinkId,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.onDishSelect = this.onDishSelect.bind(this)
    this.onDrinkSelect = this.onDrinkSelect.bind(this)
  }

  onDishSelect(dishId) {
    store.dispatch({type: SELECT_DISH, payload: {selectedDishId: dishId}});
  }

  onDrinkSelect(drinkId) {
    store.dispatch({type: SELECT_DRINK, payload: {selectedDrinkId: drinkId}});
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>

          <Route path='/home' component={() => 
              <Home 
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
             />
          }/>

          <Route exact path='/menu' component={() => 
            <Menu dishes={this.props.dishes} 
                  selectedDishId={this.props.selectedDishId} 
                  onClick={this.onDishSelect} />
          }/>

          <Route exact path='/drinkmenu' component={() => 
            <DrinkMenu drinks ={this.props.drinks} 
                  selectedDrinkId={this.props.selectedDrinkId} 
                  onClick={this.onDrinkSelect} />
          }/>

          
          <Route exact path='/about' component={() => 
            <About leaders ={this.props.leaders}  />
          }/>

           <Route exact path='/contactus' component={Contact} />

          <Redirect to="/home" />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));


