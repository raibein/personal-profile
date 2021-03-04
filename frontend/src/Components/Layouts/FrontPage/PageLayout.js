import React, { Component } from 'react';

// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';


import "../../../css/normalize.css";
import "../../../css/fontawesome.css";
import "../../../css/bootstrap.min.css"
import "../../../css/templatemo-style.css"
// import "js/vendor/modernizr-2.6.2.min.js"


import Header from "./Header";
import SideNavigation from "./SideNavigation";
import Footer from "./Footer";
import FrontPageContents from "./FrontPageContents";

class DefaultContainer extends Component {
    render() {
        return (
            <div>
                
                <SideNavigation />
                <Header />
                <div class="main-content">
                    <div class="fluid-container">
                        <div class="content-wrapper">
                            <FrontPageContents />
                            <Footer />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default DefaultContainer
