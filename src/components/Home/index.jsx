import React from "react";
import "./Home.scss";
import "./Home-media.scss";
import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import { Element } from 'react-scroll'

import first_slide_1 from '../../assets/images/slide_1/slide_1_img_1.png';
import first_slide_2 from '../../assets/images/slide_1/slide_1_img_2.png';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMobileWow: false
        };
        this.sections = {
            toGetStarted: {
                id: "to-get-started",
                text: "ourApp",
                ref: React.createRef()
            },
            howItWork: {
                id: "how-it-works",
                text: "HowItWork",
                ref: React.createRef()
            },
            source: {
                id: "learning-sources",
                text: "learningSources",
                ref: React.createRef()
            }
        };
        this.offsetSection = 70;
        this.mobileWow = React.createRef();
    }
    calcMobileShow = () => {
        const viewPortHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
        );
        let mobileRect = this.mobileWow.current.getBoundingClientRect();
        let bottomPhoneImg =
            mobileRect.top + mobileRect.height + window.scrollY;
        if (
            bottomPhoneImg < window.scrollY + viewPortHeight &&
            !this.state.showMobileWow
        ) {
            this.setState({ showMobileWow: true });
        }
    };
    handleScroll = () => {
        this.calcMobileShow();
    };
    anchorClick = (e, id) => {
        e.preventDefault();
        const curScroll = window.scrollY;
        const top =
            Math.round(
                this.sections[id].ref.current.getBoundingClientRect().top
            ) +
            curScroll -
            this.offsetSection;
        window.scrollTo({
            top: top,
            behavior: "smooth"
        });
    };
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }
    render() {

        const mobileClasses = classNames("img-phone-front", {
            show: this.state.showMobileWow
        });
        return (
            <div className="Home">
                <header className="hero">
                    <div className="wrapper-hero">
                        <div>
                            <h1 className="hero-title">
                                {this.getLangText("headerTitle")}
                            </h1>
                            <h2 className="subtitle">
                                {this.getLangText("headerSubtitle")}
                            </h2>
                            
                        </div>

                        <div className="button-started">
                            <a
                                className="get-started-button"
                                href="#toGetStarted"
                                onClick={e => {
                                    this.anchorClick(e, "toGetStarted");
                                }}
                            >
                                {this.getLangText("buttonStarted")}
                            </a>
                        </div>
                        
                    </div>
                </header>

                <div className="container" id="toGetStarted">
                    <section
                        className="content content-ourApp"
                        id={this.sections.toGetStarted.id}
                        ref={this.sections.toGetStarted.ref}
                    >
                        <div className="first-slide">
                            <div className="img">
                                <img
                                    src={first_slide_1}
                                    className={mobileClasses}
                                    ref={this.mobileWow}
                                    alt="EasyLang app"
                                />
                            </div>
                         
                        </div>
                    </section>
                    <Element id='example-destination' name='example-destination'>
                    <div className="first-slide">
                            <div className="img">
                                <img
                                    src={first_slide_1}
                                    className={mobileClasses}
                                    ref={this.mobileWow}
                                    alt="EasyLang app"
                                />
                            </div>
                         
                        </div>
      </Element>


                </div>
            </div>
        );
    }
}
