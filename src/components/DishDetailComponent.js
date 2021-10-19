import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

class DishDetailComponent extends Component{

    constructor(props) {
        super(props);
    };

    render(){
        if (this.props.dish == null) {
            return (<div></div>)
        }
        return(
            <div className="row">
                <div className="col-md-5 col-sm-8 md-4 m-1" >
                    <Card  >
                        <CardImg  width="99%" object src={this.props.dish.image} alt={this.name} className = "Font-helv" /> 
                        <CardBody >
                            <CardTitle className="Font-helv">{this.props.dish.name}</CardTitle> 
                            <CardBody className = "Font-helv"> {this.props.dish.description} </CardBody>                   
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default DishDetailComponent;
