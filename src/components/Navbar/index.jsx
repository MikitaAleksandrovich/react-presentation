import React from "react";
import { Link } from "@reach/router";
import "./Navbar.scss";
import classNames from "classnames";

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

        const langList = this.props.langList.map(l => (
            <option value={l.value} key={l.value}>
                {l.name}
            </option>
        ));
        
        return (
            <nav className={navBarClass}>
                <div className="sticky-bar">
                    <div className="logo">
                        <Link to="./" className="logo-light">
                            Taqtile
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
                </div>
            </nav>
        );
    }
}
