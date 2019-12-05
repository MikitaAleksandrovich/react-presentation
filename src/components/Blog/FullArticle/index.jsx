import React from "react";
import "./FullArticle.scss";

export default class ArticlesList extends React.Component {
    componentDidMount(){
        this.props.changeStateShowSearch(false);
    }
    render() {
        const curArticle = this.props.articleComponents.find(c=>c.props.id === this.props.id);
        return (
            <div className="fullArticle">{curArticle}</div>
        );
    }
}
