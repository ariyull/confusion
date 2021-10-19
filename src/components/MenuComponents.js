import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardHeader } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const menu = this.props.dishes.map(
            (dish) => {
                return (
                    <div key={dish.id} className="col-6 md-4 m-1" >
                        <Card onClick={() => this.props.onClick(dish.id)} className="Font-helv">
                            <div className="col-4 col-sm-12">
                                <CardImg width="99%" object src={dish.image} alt={dish.name} className="Font-helv" />
                            </div>
                            <div className="col Front-helv">
                                <CardHeader body className="ml-5 Font-helv">
                                    <CardTitle className="ml-5 Font-helv">{dish.name}</CardTitle>
                                </CardHeader>
                            </div>
                        </Card>
                    </div>
                );
            }
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <h1 className="Font-helv"> Food: </h1>
                        {menu}
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <DishDetailComponent dish={this.props.dishes[this.props.selectedDishId]} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Menu;