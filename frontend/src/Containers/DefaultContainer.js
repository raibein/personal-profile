import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';


import "../css/normalize.css";
import "../css/fontawesome.css";
import "../css/bootstrap.min.css"
import "../css/templatemo-style.css"
// import "js/vendor/modernizr-2.6.2.min.js"

import PageLayout from "../Components/Layouts/FrontPage/PageLayout"

class DefaultContainer extends Component {
    render() {
        return (
            <div>
                <PageLayout />
            </div>
        )
    }
}

export default DefaultContainer
