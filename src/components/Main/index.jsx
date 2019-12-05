import React from "react";
import { Router } from "@reach/router";
import Blog from "../Blog";
import Navbar from "../Navbar";
import Home from "../Home";
import BtnTop from "../BtnTop";
import ScrollToTop from "../ScrollToTop";
import NotFound from "../NotFound";
import Helmet from "react-helmet";

export default class App extends React.Component {
  render() {
    if (typeof window.gtag === "function") {
      window.gtag("config", "UA-4027447-9", {
        page_title: document.title,
        page_location: this.props.location.href,
        page_path: this.props.location.pathname + this.props.location.search
      });
    }
    return (
      <div className="Main">
        <Helmet htmlAttributes={{ lang: this.props.language }} />
        <Navbar
          curLang={this.props.language}
          langList={this.props.langList}
          handleLanguage={this.props.handleLanguage}
          text={this.props.text}
        ></Navbar>
        <Router>
          <ScrollToTop path="/">
            <Home path="/" text={this.props.text}></Home>
            <Blog path="/blog/*"></Blog>
            <NotFound default></NotFound>
          </ScrollToTop>
        </Router>
        <BtnTop></BtnTop>
      </div>
    );
  }
}
