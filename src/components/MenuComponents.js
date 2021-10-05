import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

// new component named Menu
class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish})
    }

    renderDish(dish) {
        if (dish != null){

            return(

                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} /> 
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle> 
                        <CardText> {dish.description} </CardText>                   
                    </CardBody>
                </Card>

            )

        }
        else {
            return(
                <div></div>
            )
        }
    }
    
    render() {

        const menu = this.props.dishes.map(
            (dish) => {


                return(
                    <div key = {dish.id} className = "col-5 md-4 m-1" > 
                        <Card onClick={()=> this.onDishSelect(dish)}>


                                <div className ="col-4 col-sm-12">

                                    
                                        <CardImg width="100%" object src={dish.image} alt={dish.name} /> 
                  

                                </div>

                                <div className ="col">

                                <CardImgOverlay body className = "ml-5">
                                    <CardTitle>{dish.name}</CardTitle>
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
                        {menu} 
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        ); 

    }

}

export default Menu;