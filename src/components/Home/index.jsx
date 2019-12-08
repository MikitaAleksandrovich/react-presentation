import React from "react";
import "./Home.scss";
import "./Home-media.scss";
import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import { Element } from 'react-scroll';


import image_1 from '../../assets/images/home/image_1.jpg';
import third_slide_image from '../../assets/images/home/third_slide_image.png';
import brizer from '../../assets/images/home/brizer.png';
import box from '../../assets/images/home/3_4_screen/box.svg';
import money from '../../assets/images/home/3_4_screen/money.svg';
import volume from '../../assets/images/home/3_4_screen/volume.svg';
import kpd from '../../assets/images/home/3_4_screen/kpd.svg';
import module from '../../assets/images/home/module.png';
import room from '../../assets/images/home/room.jpg';
import energy from '../../assets/images/home/7_screen/energy.svg';
import like from '../../assets/images/home/7_screen/like.svg';
import point1 from '../../assets/images/home/7_screen/point1.svg';
import point2 from '../../assets/images/home/7_screen/point2.svg';
import point3 from '../../assets/images/home/7_screen/point3.svg';
import volume2 from '../../assets/images/home/7_screen/volume.svg';


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
                   <section className="first-slide-container">
                       <div 
                            className={mobileClasses}
                            ref={this.mobileWow}
                            className="text-block-blur"
                        >
                            <div className="text-block">
                             <h1 className="header-first-slide">{this.props.text.HeaderFirstSlide}</h1>
                             <hr class="line-first-slide"></hr>
                            <p>{this.props.text.TextFirstSlide_1}</p>
                            <p>{this.props.text.TextFirstSlide_2}</p>
                            </div>
                       </div>
                        <div>
                            <img
                                className={mobileClasses}
                                ref={this.mobileWow}
                                src={image_1}
                                className="image-block"
                                alt="Mobile background"
                            />
                        </div>
                         <div className="red-block"></div>
                    </section>

                    <section className="second-slide-container">
                         <div className="second-red-block">
                                <h1 className="header-second-slide">{this.props.text.HeaderSecondSlide}</h1>
                         </div>
                         <div className="second-text-block">
                            <p>{this.props.text.TextSecondSlide_1}</p>
                            <p>{this.props.text.TextSecondSlide_2}</p>
                            <p>{this.props.text.TextSecondSlide_2}</p>
                            <p>{this.props.text.TextSecondSlide_4}</p>
                            <p>{this.props.text.TextSecondSlide_5}</p>
                         </div>
                    </section>


                    <section className="third-slide-container">
                         <div className="third-image-block">
                                <img className="third-slide-image" 
                                     src={third_slide_image}
                                />
                         </div>
                         <div className="third-text-block">
                            <h1 className="header-second-slide">{this.props.text.HeaderThirdSlide}</h1>
                            <div className="third-block-prop"> 
                                <img src={money}/>
                                <p>{this.props.text.TextThirdSlide_1}</p>
                            </div>
                            <div className="third-block-prop"> 
                                <img src={box}/>
                                <p>{this.props.text.TextThirdSlide_2}</p>
                            </div>
                            <div className="third-block-prop"> 
                                <img src={volume}/>
                                <p>{this.props.text.TextThirdSlide_3}</p>
                            </div>
                         </div>
                    </section>


                    <section className="fourth-slide-container">
                         <div className="third-text-block">
                            <h1>{this.props.text.HeaderFourthSlide}</h1>
                            <div className="fourth-block-prop"> 
                                <img src={volume}/>
                                <p>{this.props.text.TextFourthSlide_1}</p>
                            </div>
                            <div className="fourth-block-prop"> 
                                <img src={kpd}/>
                                <p>{this.props.text.TextFourthSlide_2}</p>
                            </div>
                         </div>
                         <div className="fourth-image-block">
                                <img 
                                     src={brizer}
                                />
                         </div>
                    </section>

                    
                    <section className="fifth-slide-container">
                        <div className="fifth-image-block">
                                <img
                                     src={module}
                                />
                         </div>
                         <div className="fifth-text-block">
                            <h1>{this.props.text.HeaderFifthSlide}</h1>
                         </div>
                    </section>


                    <section className="sixth-slide-container">
                         <div className="sixth-text-block">
                            <h1>{this.props.text.HeaderSixthSlide}</h1>
                            <div className="sixth-block-prop"> 
                                <p>{this.props.text.TextSixthSlide_1}</p>
                            </div>
                            <div className="sixth-block-prop"> 
                                <p>{this.props.text.TextSixthSlide_2}</p>
                            </div>
                         </div>
                         <div className="sixth-image-block">
                                <img 
                                     src={room}
                                />
                         </div>
                    </section>


                    <section className="seventh-slide-container row">
                    <div className="seventh-slide-card col-lg-4 col-md-6 col-sm">
                                <img src={energy} className="card-img-top" alt="energy" />
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.text.Card_1_Title}</h5>
                                    <p className="card-text">{this.props.text.Card_1_Text}</p>
                            </div>
                            </div>
                            <div className="seventh-slide-card col-lg-4 col-md-6 col-sm">
                                <img src={volume2} className="card-img-top" alt="energy" />
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.text.Card_2_Title}</h5>
                                    <p className="card-text">{this.props.text.Card_2_Text}</p>
                            </div>
                            </div>
                            <div className="seventh-slide-card col-lg-4 col-md-6 col-sm">
                                <img src={point1} className="card-img-top" alt="energy" />
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.text.Card_3_Title}</h5>
                                    <p className="card-text">{this.props.text.Card_3_Text}</p>
                            </div>
                            </div>
                            <div className="seventh-slide-card col-lg-4 col-md-6 col-sm">
                                <img src={point2} className="card-img-top" alt="energy" />
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.text.Card_4_Title}</h5>
                                    <p className="card-text">{this.props.text.Card_4_Text}</p>
                            </div>
                            </div>
                            <div className="seventh-slide-card col-lg-4 col-md-6 col-sm">
                                <img src={point3} className="card-img-top" alt="energy" />
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.text.Card_5_Title}</h5>
                                    <p className="card-text">{this.props.text.Card_5_Text}</p>
                            </div>
                            </div>
                            <div className="seventh-slide-card col-lg-4 ">
                                <img src={like} className="card-img-top" alt="energy" />
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.text.Card_6_Title}</h5>
                                    <p className="card-text">{this.props.text.Card_6_Text}</p>
                            </div>
                            </div>     
                    </section>
            </div>
        );
    }
}
