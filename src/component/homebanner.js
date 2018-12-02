import React, {Component } from 'react';

class HomeBanner extends React.Component {

    render() {
        return (
            <section className="container-fluid">
                <div className="row banner">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Wrapper for slides */}
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="overlay" />
                                <img src="images/baner.jpg" alt="Flower" />
                                <div className="carousel-caption">
                                    <h3 className="toggle-heading animated fadeInDown">explore monastries</h3>
                                    <p className="toggle-caption animated fadeInUp">
                                        Nepal's Hindu and Buddhist temples are masterworks in oiled brick, stone and carved wood.
                                    </p>
                                    <p className="toggle-button animated fadeInUp">
                                        <a href="#" className="btn yellow animated fadeInUp">Explore more</a>
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="overlay" />
                                <img src="images/banner.jpg" alt="Flower" />
                                <div className="carousel-caption">
                                    <h3 className="toggle-heading animated fadeInDown">Essence of travel</h3>
                                    <p className="toggle-caption animated fadeInUp">
                                        Its pristine air, spectacular backdrop of snowy peaks, serene lakes and surrounding greenery make it ‘the jewel in the Himalaya’, a place of remarkable natural beauty.
                                    </p>
                                    <p className="toggle-button animated fadeInUp">
                                        <a href="#" className="btn yellow">Explore more</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Left and right controls */}
                        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                            <img src="images/arrow-left.png" width={32} height={60} id="l-r" />
                        </a>
                        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                            <img src="images/arrow-right.png" width={32} height={60} id="l-r" />
                        </a>
                    </div>
                    <div className="why">
                        <a href="#services">
                        Why we are different? 
                        <i className="fa fa-angle-down animated infinite bounce" />
                        </a>
                    </div>
                </div>
            </section>
        )
    }

}

export default HomeBanner;