import React, { Component } from 'react';

import { Nav, Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    <React.Fragment>

      <Jumbotron>
           <div className="container Font-nav text-center  ">

                   <div className="offset-md-3 col-10 col-sm-6 text-center justify-content-center ">
                   <Nav >
                        <div className="container ">
                            <div className="row ">
                                <div className = "col-12 Font-nav text-center ">
                                    <a href="/">
                                        <h1 className="Font-nav text-center  "> Restaurauntay Confusion </h1>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </Nav>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>

           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;