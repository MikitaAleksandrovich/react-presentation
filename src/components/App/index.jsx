import React from "react";
import {
  Router,
  navigate
} from "@reach/router";
import "./App.scss";
import languageEn from "../../assets/languages/en.json";
import languageRu from "../../assets/languages/ru.json";
import languagePl from "../../assets/languages/pl.json";
import Main from "../Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.langStore = {
      en: languageEn,
      ru: languageRu,
      pl: languagePl
    };
  }
  getUserLanguageFromInputList() {
    const userLang = this.getUserLanguage;
    const langList = this.getLangList().map(l => l.value);
    if (langList.every(l => l.value !== userLang)) {
      return langList[0];
    }
    return userLang;
  }
  getUserLanguage() {
    return (
      navigator.language ||
      (navigator.languages && navigator.languages[0]) ||
      navigator.userLanguage ||
      "en"
    );
  }
  handleLanguage = lang => {
    let path = window.location.pathname + window.location.search;
    const langs = Object.keys(this.langStore);
    if (
      langs.every(l => {
        const reg = new RegExp("^/" + l);
        return path.search(reg) === -1;
      })
    ) {
      navigate("/" + lang + (path === "/" ? "" : path));
    } else {
      let newPath = path.split("/");
      newPath.shift();
      newPath.shift();
      newPath = newPath.join("/");
      newPath = newPath ? "/" + newPath : "";
      newPath = "/" + lang + newPath;
      navigate(newPath);
    }
  };
  getLangList() {
    return Object.keys(this.langStore).map(k => {
      return { value: k, name: this.langStore[k].name };
    });
  }
  render() {
    return (
      <div className="App">
          <Router>
            {Object.keys(this.langStore).map(lang => (
              <Main
                path={`/${lang}/*`}
                language={lang}
                langList={this.getLangList()}
                handleLanguage={this.handleLanguage}
                text={this.langStore[lang]}
                key={lang}
              />
            ))}
            <Main
              path={`/*/`}
              language={this.getUserLanguageFromInputList()}
              langList={this.getLangList()}
              handleLanguage={this.handleLanguage}
              text={this.langStore[this.getUserLanguageFromInputList()]}
              key={this.getUserLanguageFromInputList()}
            />
          </Router>
      </div>
    );
  }
}

export default App;
