import React, { Component } from 'react';
import './Homepage.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Switch } from 'react-mdl';
import { Layout, Header, Navigation, Content } from "react-mdl";
import LandingPage from '../LandingPage/LandingPage';
import Background from '../Images/damir-spanic-uytHnZAKNWQ-unsplash.jpg';
import Services from '../Services/Services';
import OurClasses from '../OurClasses/OurClasses';
import AboutUs from '../AboutUs/AboutUs';
import Blog from '../Blog/Blog';
import Pricing from '../Pricing/Pricing';
import ContactUs from '../ContactUs/ContactUs';
import CreditCard from '../CreditCard/CreditCard';
import FormValidation from '../FormValidation/FormValidation';

class Homepage extends Component {
    render() {
        return (
            <div className="all-content">
      <div className="demo-big-content" style={{height: "600px", position: "relative"}}>
        <Layout style={{background: `url(${Background}) center / cover`}}>
            <Header className="header-color" title="POWER GYM" scroll>
                <Navigation>
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/our-classes">Our Classes</a>
                    <a href="/about-us">About Us</a>
                    <a href="/blog">Blog</a>
                    <a href="/pricing">Pricing</a>
                    <a href="/contact-us">Contact Us</a>
                    <a href="/credit-card">Credit Cards</a>
                    <a href="/formValidation">Form Validation</a>
                </Navigation>
            </Header>
            
            <Content>
                <div className="landingPage">
                    <div className="page-content" />
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <LandingPage></LandingPage>
                            </Route>
                            <Route path="/services">
                                <Services></Services>
                            </Route>
                            <Route path="/our-classes">
                                <OurClasses></OurClasses>
                            </Route>
                            <Route path="/about-us">
                                <AboutUs></AboutUs>
                            </Route>
                            <Route path="/blog">
                                <Blog></Blog>
                            </Route>
                            <Route path="/pricing">
                                <Pricing></Pricing>
                            </Route>
                            <Route path="/contact-us">
                                <ContactUs></ContactUs>
                            </Route>
                            <Route path="/credit-card">
                                <CreditCard></CreditCard>
                            </Route>
                            <Route path="/formValidation">
                                <FormValidation></FormValidation>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </Content>
        </Layout>
        </div>
    </div>
        );
    }
}

export default Homepage;
