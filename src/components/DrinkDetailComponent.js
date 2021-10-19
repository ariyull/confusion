import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

class DrinkDetailComponent extends Component{
        
    render(){
        if (this.props.drink == null) {
            return (<div className = "Font-helv col-md-5 col-sm-8 md-4 m-1 box">
                <p> Click on the Drink image for more info. </p>    
                <p> Drink Details will appear here. </p>
            </div>)
        }
        return(        
            <div className="row">
                <div className="col-md-5 col-sm-8 md-4 m-1 box" >
                    <Card  >
                        <CardImg  width="99%" object src={this.props.drink.image} alt={this.name} className = "Font-helv" /> 
                        <CardBody >
                            <CardTitle className="Font-helv">{this.props.drink.name}</CardTitle> 
                            <CardBody className = "Font-helv"> {this.props.drink.description} </CardBody>                   
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default DrinkDetailComponent;