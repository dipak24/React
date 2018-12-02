import React from 'react';

import Title from '../Title';

class Footer extends React.Component {
    render() {
        return(
            <footer className="container-fluid">
                <div className="row main-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <Title title='About Us'/>
                                <div className="footer-widget">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis...&nbsp;&nbsp;<a href="#">Read more</a></p>
                                    <i className="association">We are associated with</i>
                                    <img src="images/accociate.png" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <h2 className="widget-footer-title">Contact us</h2>
                                <div className="footer-widget">
                                    <ins>Bodhi Adventures Pvt. Ltd.</ins>
                                    <ul className="contact-links">
                                        <li>
                                            <span><i className="fa fa-map-marker" /></span>
                                            <p>P.O.Box : 23573, Nayabazar 16
                                                <br />Kathmandu Nepal
                                            </p>
                                        </li>
                                        <li>
                                            <span><i className="fa fa-phone" /></span>
                                            <p>
                                                Phone : 977 01 4700927
                                                <br /> Mob. : +977 9841484556, +977 9851049353
                                            </p>
                                        </li>
                                        <li>
                                            <span><i className="fa fa-envelope" /></span>
                                            <p>Email : info@bodhiadventures.com</p>
                                        </li>
                                    </ul>
                                    <div className="social">
                                        <span className="fbk">
                                <a href="#" target="__blank"><i className="fa fa-facebook" /></a>
                                </span>
                                        <span className="g-plus">
                                <a href="#"><i className="fa fa-google-plus" /></a>
                                </span>
                                        <span className="pin">
                                <a href="#" target="__blank"><i className="fa fa-pinterest-p" /></a>
                                </span>
                                        <span className="twt">
                                <a href="#" target="__blank"><i className="fa fa-twitter" /></a>
                                </span>
                                        <span className="linked">
                                <a href="#" target="__blank">
                                    <i className="fa fa-linkedin" />
                                </a>
                                </span>
                                        <span className="ytb">
                                <a href="#" target="__blank">
                                    <i className="fa fa-youtube" />
                                </a>
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <h2 className="widget-footer-title">Trending on</h2>
                                <div className="footer-widget">
                                    <iframe width="100%" height={190} src="https://www.youtube.com/embed/tBNgNwI4FWU" frameBorder={0} allowFullScreen />
                                    <div className="video-heading">
                                        A Tour of Buddhist Shrines - Lumbini (Nepal), Kushinagar (India)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bottom-footer">
                    <div className="container">
                        <div className="row bottom">
                            <div className="col-md-8">
                                <a href="#">Home</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Terms &amp; Conditions</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Privacy Policy</a>
                                <br /> Copyright 2017 © Bodhi Adventures&nbsp;&nbsp;|&nbsp;&nbsp;All Rights Reserved. Made with love and care by <a href="#" target="__blank">WildStone Solution</a>
                            </div>
                            <div className="col-md-4 text-right">
                                <img src="images/mastercard.png" />
                                <img src="images/visa.png" />
                                <img src="images/maestro.png" />
                                <img src="images/banktransfer.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;