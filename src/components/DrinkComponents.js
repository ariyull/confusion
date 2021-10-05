import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

// new component named Drinks
class DrinkMenu extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedDrink: null
        }
    }



    render() {

        const drinkmenu = this.props.drinks.map(
            (drink) => {


                return(
                    <div key = {drink.id} className = "col-5 md-4 m-1" > 
                        <Card>


                                <div className ="col-4 col-sm-12">

                                    
                                        <CardImg width="100%" object src={drink.image} alt={drink.name} /> 
                  

                                </div>

                                <div className ="col">

                                <CardImgOverlay body className = "ml-5">
                                    <CardTitle>{drink.name}</CardTitle>
                                </CardImgOverlay>

                                </div>

                    

                        </Card>
                    </div>
                );
            }



        );




        return(
            <div className="container">
                <div className="row">
                        {drinkmenu} 
                </div>
            </div>
        ); 

    }

}

export default DrinkMenu;