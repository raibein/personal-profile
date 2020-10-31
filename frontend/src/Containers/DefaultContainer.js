import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';


import "../css/normalize.css";
import "../css/fontawesome.css";
import "../css/bootstrap.min.css"
import "../css/templatemo-style.css"
// import "js/vendor/modernizr-2.6.2.min.js"


class DefaultContainer extends Component {
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

                <div class="banner-bg" id="top">
                    <div class="banner-overlay"></div>
                    <div class="welcome-text">
                        <h2><span class="r-name">Raben Shrestha</span> | My Portfolio</h2>
                        <h5><span class="capt"> - Burning of desires and high the sky, pave on the way </span></h5>
                    </div>
                </div>

                <div class="main-content">
                    <div class="fluid-container">

                        <div class="content-wrapper">
                        
                            <div class="page-section" id="about">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="widget-title"><a href="about.html">About Me</a></h4>
                                    <div class="about-image">
                                        <img src="img/about_me.jpg" alt="about me" />
                                    </div>
                                    <p>
                                        Free of the will like the cool breeze upon the face while on the sit 
                                        beside the windows is the <strong>intro of myself</strong>. Creating new things, 
                                        experience the adventurous, go beyond the sky, cross the limt are the eyes 
                                        of my perspective. Technically, I wear glasses have different things in my mind 
                                        and after that with my clear eyes, I have rainbow in my vision...
                                    </p>
                                    <hr />
                                </div>
                            </div>
                            </div>
                            
                            <div class="page-section" id="projects">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="widget-title"><a href="gallery.html">PHOTOS OF WHAT IN MY VISIONARIES</a></h4>
                                    <p>
                                        Anybody cannot see the rainbow without rain. But the rainbow is always there 
                                        with the eyes of vivid colors. Life is full of colors, paint it. Joy of life 
                                        enjoy it. Photos are most precious when it comes from the memories. It has 
                                        make the different feeling with different meaning with lots of perspective. 
                                        It is the art and described it self with visionary with colors and faded.
                                    </p>
                                </div>
                            </div>
                            <div class="row projects-holder">
                                <div class="col-md-4 col-sm-6">
                                    <div class="project-item">
                                        <img src="img/dcomm.jpg" alt="" />
                                        <div class="project-hover">
                                            <div class="inside">
                                                <h5><a href="#">Devinity of Community Live</a></h5>
                                                <p>Art and culture mix with music flow.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="project-item">
                                        <img src="img/children.jpg" alt="" />
                                        <div class="project-hover">
                                            <div class="inside">
                                                <h5><a href="#">Children Playing</a></h5>
                                                <p>
                                                    Children are enjoying with rain and dancing with full of joy.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="project-item">
                                        <img src="img/kaalbharab.jpg" alt="" />
                                        <div class="project-hover">
                                            <div class="inside">
                                                <h5><a href="#">God Kalbhairav</a></h5>
                                                <p>
                                                    The god of destruction. The god of anger and power in the form of pure energy.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="project-item">
                                        <img src="img/photography.jpg" alt="" />
                                        <div class="project-hover">
                                            <div class="inside">
                                                <h5><a href="#">Traditional Paddy Processing</a></h5>
                                                <p>From paddy to rice processing and pile it to sell and eat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="project-item">
                                        <img src="img/sunrise.jpg" alt="" />
                                        <div class="project-hover">
                                            <div class="inside">
                                                <h5><a href="#">Sun Rise</a></h5>
                                                <p>
                                                    Sun rise on the way the hight of mountain. The height may be 2000 meter.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="project-item">
                                        <img src="img/swmn.jpg" alt="" />
                                        <div class="project-hover">
                                            <div class="inside">
                                                <h5><a href="#">Swayambhu</a></h5>
                                                <p>
                                                    Swayambhunath is an ancient religious architecture atop a hill in the Kathmandu Valley, west of Kathmandu city. The Tibetan name for the site means 'Sublime Trees', for the many varieties of trees found on the hill.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <hr />

                            <div class="page-section" id="contact">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="widget-title"><a href="contact.html">PLACE TO TALK WITH ME</a></h4>
                                    <p>
                                        If you have anything to say and share with me than please write me or if you have 
                                        any of the comment than I am so much happy to know about for improvement. I am 
                                        always glad to receive anything you share and any suggestion you have for me.
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <form action="#" method="post" class="contact-form">
                                    <fieldset class="col-md-4 col-sm-6">
                                        <input type="text" id="your-name" placeholder="Your Name..." />
                                    </fieldset>
                                    <fieldset class="col-md-4 col-sm-6">
                                        <input type="email" id="email" placeholder="Your Email..." />
                                    </fieldset>
                                    <fieldset class="col-md-4 col-sm-12">
                                        <input type="text" id="your-subject" placeholder="Subject..." />
                                    </fieldset>
                                    <fieldset class="col-md-12 col-sm-12">
                                        <textarea name="message" id="message" cols="30" rows="6" placeholder="Leave your message..."></textarea>
                                    </fieldset>
                                    <fieldset class="col-md-12 col-sm-12">
                                        <input type="submit" class="button big default" value="Send Message" />
                                    </fieldset>
                                </form>
                            </div>
                            </div>
                            <hr />

                            <div class="row" id="footer">
                                <div class="col-md-12 text-center">
                                    <p class="copyright-text">Copyright &copy; 2017 Raben Shrestha</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default DefaultContainer
