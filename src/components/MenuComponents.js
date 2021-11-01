import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import DishDetailComponent from './DishDetailComponent';

class Menu extends Component {


    render() {
        const menu = this.props.dishes.map(
            (dish) => {
                return (
                    <div key={dish.id} className="col-8 md-4 m-1 " >
                        <Card onClick={() => this.props.onClick(dish.id)} className="Font-helv ">
                            <div className="col-4 col-sm-12">
                                <CardImg width="99%" object src={dish.image} alt={dish.name} className="Font-helv" />
                            </div>
                            <div className="col Front-helv">
                                <CardHeader body className="ml-5 Font-helv Card-header-bg">
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
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                    <div className="col-md-9 col-sm-12">
                        <DishDetailComponent dish={this.props.dishes[this.props.selectedDishId]} />
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <h1 className="Font-helv"> Food: </h1>
                        {menu}
                    </div>


                </div>
            </div>
        );
    }

}

export default Menu;
