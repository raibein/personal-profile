import React, { Component } from 'react';

class SideNavigationComponent extends Component {
    render() {
        return (
            <div>
                <div class="responsive-header visible-xs visible-sm">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="top-section">
                                    <div class="profile-image">
                                        <img src="img/profile.jpg" alt="Volton" />
                                    </div>
                                    <div class="profile-content">
                                        <h3 class="profile-title">Raben</h3>
                                        <p class="profile-description">Personal Website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="toggle-menu"><i class="fa fa-bars"></i></a>
                        <div class="main-navigation responsive-menu">
                            <ul class="navigation">
                                <li><a href="#top"><i class="fa fa-home"></i>Home</a></li>
                                <li><a href="#about"><i class="fa fa-user"></i>About Me</a></li>
                                <li><a href="#projects"><i class="fa fa-newspaper-o"></i>My Gallery</a></li>
                                <li><a href="#contact"><i class="fa fa-envelope"></i>Contact Me</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="sidebar-menu hidden-xs hidden-sm">
                    <div class="top-section">
                        <div class="profile-image">
                            <img src="img/profile.jpg" alt="Raben" />
                        </div>
                        <h3 class="profile-title">Raben</h3>
                        <p class="profile-description">My Portfolio</p>
                    </div>
                    <div class="main-navigation">
                        <ul class="navigation">
                            <li><a href="#top"><i class="fa fa-globe"></i>Welcome</a></li>
                            <li><a href="#about"><i class="fa fa-pencil"></i>About Me</a></li>
                            <li><a href="#projects"><i class="fa fa-paperclip"></i>My Gallery</a></li>
                            <li><a href="#contact"><i class="fa fa-link"></i>Contact Me</a></li>
                        </ul>
                    </div> 
                    <div class="social-icons">
                        <ul>
                            <li><a href="https://www.facebook.com/xrabayn5/"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/xraben5"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="linkedin.com/in/raven-shrestha-34979777/"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="https://plus.google.com/u/0/102284415250161137037"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="https://www.youtube.com/"><i class="fa fa-youtube"></i></a></li>
                            <li><a href="#"><i class="fa fa-rss"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideNavigationComponent
