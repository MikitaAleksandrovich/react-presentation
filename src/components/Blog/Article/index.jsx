import ReactHtmlParser from "react-html-parser";
import React from "react";
import "./Article.scss";
import { Link } from "@reach/router";

export default class Article extends React.Component {
    render() {
        let article;
        let readMoreBtn;
        
        if (this.props.isFullview) {
            readMoreBtn = (
                <Link to='../' className="Read-more-btn">
                    Back
                </Link>
            );
            article = (
                <div className="Article">
                    {ReactHtmlParser(this.props.articleHtml)}
                    {readMoreBtn}
                </div>
            );
        } else {
            readMoreBtn = (
                <Link to={this.props.id.toString()} className="Read-more-btn">
                    Read more
                </Link>
            );
            const articleReact = ReactHtmlParser(this.props.articleHtml);
            const articleTitle = articleReact.find(e => e.type === "h1");
            const articleImg = articleReact.find(e => e.type === "img");
            const articleText = articleReact.find(e => e.type === "p");
            article = (
                <div className="Article hide">
                    <div className="grid">
                        <div className="grid-title">{articleTitle}</div>
                        <div className="grid-img">{articleImg}</div>
                        <div className="grid-text">{articleText}</div>
                        <div className="grid-read-more">{readMoreBtn}</div>
                    </div>
                </div>
            );
        }
        return article;
    }
}
