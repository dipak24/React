import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../component/header';
import Footer from '../component/Footer/Footer';
import Banner from '../component/homebanner';
import bodhi from '../bodhi.js'

import Slider from './Slider';

class HomeComponent extends React.Component {

    render() {
        return(
            <div>
                <section>
                    {/* <Header /> */}
                    
                    {/* <Banner /> */}
                    
                    <Slider/>

                    {/* <Footer /> */}
                </section>
            </div>
        )
    }
}

export default HomeComponent;
