import React from "react";
import "./Blog.scss";
import Header from "./Header";
import Article from "./Article";
import Footer from "../Footer";
import ArticlesList from './ArticlesList'
import FullArticle from './FullArticle'
import {Router, navigate} from"@reach/router"

export default class Blog extends React.Component {
    articles = [];
    constructor(props) {
        super(props);
        (context => {
            context
                .keys()
                .sort((a, b) => b.match(/[0-9]+/)[0] - a.match(/[0-9]+/)[0])
                .forEach(key => this.articles.push(context(key)));
        })(require.context("../../articles/", false, /.html$/));
        this.state = {
            showSearch: true,
            findArticleText: ""
        };
    }
    getArticleTitle(html) {
        const title = html.match(/<h1>([^<>]*)<\/h1>/);
        if (title) return title[1];
        return "";
    }
    parseStringToPath(str){
        return str.replace(/[^\w]/g,'-').replace(/[-]+/,'-').replace(/[-]$/,'');
    }
    generateArticleComponents(isFullview=false) {
        const articles = this.articles.map((a, index) => {
            const title = this.getArticleTitle(a);
            return (
                <Article articleHtml={a} title={title} key={index} id={index+'-'+this.parseStringToPath(title)} isFullview={isFullview}/>
            );
        });
        return articles;
    }
    
    handleFindText = text => {
        if (text){
            navigate('?q='+text)
        }else{
            this.props.navigate('./')
        }
    };

    changeStateShowSearch = (state = true)=> {
        this.setState({showSearch:state})
    }

    parseQueryParam=()=>{
        let searchText = '';
        let match = this.props.location.search.match(/q=([^&]*)/);
        if (match){
            searchText = match[1];
        }
        return decodeURI(searchText);
    }
    render() {
        return (
            <div className="Blog">
                <Header
                    findArticleText={this.state.findArticleText}
                    handleFindText={this.handleFindText}
                    showSearch={this.state.showSearch}
                    parseQueryParam={this.parseQueryParam}
                ></Header>
                <div className="content">
                    <div className="container">
                        <Router>
                            <ArticlesList path='/' articleComponents={this.generateArticleComponents(false)} changeStateShowSearch={this.changeStateShowSearch} parseQueryParam={this.parseQueryParam}></ArticlesList>
                            <FullArticle path=":id" articleComponents = {this.generateArticleComponents(true)} changeStateShowSearch={this.changeStateShowSearch}></FullArticle>
                        </Router>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
