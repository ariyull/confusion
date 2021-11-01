import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class About extends Component {

    render() {
        const leaderscards = this.props.leaders.map(
            (leaders) => {
                return (
                    <div key={leaders.id} className="col-8 md-4 m-1" >
                        <hr/>
                        <div className="row ">
                            <div className="col-5  ">
                                <h1> {leaders.name }</h1>
                                <Media src={leaders.image} height="200px"/>
                            </div>
                            <div className="col-2  Font-helv ">
                                <h3> {leaders.designation} </h3>
                            </div>
                            <div className="col-5">
                                <p> {leaders.description} </p>
                            </div>
                        </div>
                    </div>
                );
            }
        );


    return(
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>

            <h1 className="Font-helv"> Leaders: </h1>
            {leaderscards} 

        </div>

    )
};
}
export default About;
