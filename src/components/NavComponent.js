import React, { Component } from 'react';
import { Nav } from "reactstrap";


class NavComponent extends Component{

    render(){
        return(
            <Nav>
                <div className="container">
                    <div className="row ">
                        <div className = "col-12 Font-nav">
                            <a href="/">
                                <h1 className="Font-nav"> Restaurauntay Confusion </h1>
                            </a>
                        </div>

                    </div>
                </div>
            </Nav>
        )
        }
    }

export default NavComponent
