import React, { Component } from 'react';

import "../../../css/normalize.css";
import "../../../css/fontawesome.css";
import "../../../css/bootstrap.min.css"
import "../../../css/templatemo-style.css"


import Header from "./Header";
import SideNavigation from "./SideNavigation";
import Footer from "./Footer";
import FrontPageContents from "./FrontPageContents";


import { getAboutContent } from '../../../api/about';

class DefaultContainer extends Component {

    state = {
        aboutData: [],
		isLoadinglist: false
      }


    fetchData = () => {
		this.setState({ isLoadinglist: true });

		getAboutContent()
			.then(aboutData => this.setState({ aboutData }))
			.catch(error => { "Data not found "})
			.then(() => this.setState({ isLoadinglist: false }));
	};
    
    componentDidMount = () => {
		this.fetchData();
	};
    
    render() {
        // console.log(this.state.aboutData);
        return (
            <div>
                
                <SideNavigation />
                <Header />
                <div class="main-content">
                    <div class="fluid-container">
                        <div class="content-wrapper">
                            <FrontPageContents data = { this.state.aboutData }  />
                            <Footer />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default DefaultContainer
