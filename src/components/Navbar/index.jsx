import React from "react";
import "./Navbar.scss";
import classNames from "classnames";
import { Link } from 'react-scroll'
import logo from '../../assets/images/navbar/logo.png'


export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
            fixedBar: false
        };
    }
    changeLocale = e => {
        this.props.handleLanguage(e.target.value);
    };
    clickMenuButton = () => {
        this.setState(state => {
            return { openMenu: !state.openMenu };
        });
    };
    closeMenu = () => {
        this.setState({
            openMenu: false
        });
    };
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = e => {
        if (window.pageYOffset > 50 && !this.state.fixedBar) {
            this.setState({
                fixedBar: true
            });
        } else if (window.pageYOffset <= 50 && this.state.fixedBar) {
            this.setState({
                fixedBar: false
            });
        }
    };
    render() {

        const navBarClass = classNames("Navbar", {
            "no-fixed-bar": !this.state.fixedBar,
            "fixed-bar": this.state.fixedBar
        });
        const menuBtnClass = classNames("menu-btn", {
            "menu-btn_active": this.state.openMenu
        });
        const menuMainClass = classNames("menu-main", {
            "menu-main_active": this.state.openMenu
        });

        const langList = this.props.langList.map(l => (
            <option value={l.value} key={l.value}>
                {l.name}
            </option>
        ));
        
        return (
            <nav className={navBarClass}>
            <div className="sticky-bar">
                <div>
                    <Link to="./" className="logo-light">
                        <img className="logo" src={logo}/>
                    </Link>
                </div>
                <div className="lang">
                    <form>
                        <select
                            name="changeLang"
                            id="getLang"
                            value={this.props.curLang}
                            onChange={this.changeLocale}
                        >
                            {langList}
                        </select>
                    </form>
                </div>
                <div className="menu-wrapper">
                    <div className="menu-block">
                        <div className={menuMainClass}>
                            <div
                                className="overlay"
                                onClick={this.closeMenu}
                            ></div>
                            <ul className="menu-main-list">
                                <li>
                                    <span className="menu-logo">
                                        <img src={logo} />
                                    </span>
                                </li>
                                <li>
                                    <Link
                                          to="example-destination" 
                                          spy={true} 
                                          smooth={true} 
                                          duration={500} 
                                          className='menu-nav__link' 
                                          activeClass='some-active-class'
                                    >
                                        {this.props.text.Installation}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                          to="example-destination" 
                                          spy={true} 
                                          smooth={true} 
                                          duration={500} 
                                          className='menu-nav__link' 
                                          activeClass='some-active-class'
                                    >
                                        {this.props.text.Equipment}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                          to="example-destination" 
                                          spy={true} 
                                          smooth={true} 
                                          duration={500} 
                                          className='menu-nav__link' 
                                          activeClass='some-active-class'
                                    >
                                        {this.props.text.Solution}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                          to="example-destination" 
                                          spy={true} 
                                          smooth={true} 
                                          duration={500} 
                                          className='menu-nav__link' 
                                          activeClass='some-active-class'
                                    >
                                        {this.props.text.Scheme}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                          to="example-destination" 
                                          spy={true} 
                                          smooth={true} 
                                          duration={500} 
                                          className='menu-nav__link' 
                                          activeClass='some-active-class'
                                    >
                                        {this.props.text.Advantages}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={menuBtnClass}
                        onClick={this.clickMenuButton}
                    >
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
        );
    }
}
