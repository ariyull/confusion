import React, { Component } from 'react';
import { Card, CardImg, CardHeader, CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import { Link } from 'react-router-dom';
import DrinkDetailComponent from './DrinkDetailComponent';

class DrinkMenu extends Component{

    constructor(props) {
        super(props);
    };

    render() {
        
        const drinkmenu = this.props.drinks.map(
            (drink) => {
                return(
                    <div key = {drink.id} className = "col-8 md-4 m-1 Font-helv " > 
                        <Card onClick={()=> this.props.onClick(drink.id)} className = "Font-helv">
                            <div className ="col-4 col-sm-12 Font-helv">       
                                    <CardImg  width="99%" object src={drink.image} alt={drink.name} className="Font-helv" /> 
                            </div>
                            <div className ="col Font-helv">
                            <CardHeader body className = "ml-5 Font-helv Card-header-bg ">
                                <CardTitle className="ml-5 Font-helv">{drink.name}</CardTitle>
                            </CardHeader>
                            </div>
                        </Card>
                    </div>
                );
            }
        );

        return(
            <div className="container">
                <div class="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Drink Menu</BreadcrumbItem>
                        </Breadcrumb>
                    <div className="col-md-9">
                        <DrinkDetailComponent drink={this.props.drinks[this.props.selectedDrinkId]}/>
                    </div>
                    <div className="col-md-3">
                        <h1 className="Font-helv"> Drinks: </h1>
                        {drinkmenu} 
                    </div>

                </div>
            </div>


        ); 

    }

}

export default DrinkMenu;