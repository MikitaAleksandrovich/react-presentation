import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "../Navbar";
import Home from "../Home";
import BtnTop from "../BtnTop";
import ScrollToTop from "../ScrollToTop";
import NotFound from "../NotFound";
import Helmet from "react-helmet";
import Footer from "../Footer";

export default class App extends React.Component {
  render() {

    return (
      <div className="Main">
        <Helmet htmlAttributes={{ lang: this.props.language }} />
        <Navbar
          curLang={this.props.language}
          langList={this.props.langList}
          handleLanguage={this.props.handleLanguage}
          text={this.props.text}
        ></Navbar>
        <Home text={this.props.text}></Home>
        <BtnTop></BtnTop>
      </div>
    );
  }
}
