import React, { Component } from "react";
import LanguageContext from "../contexts/index";
export const persian = {
  language: "Persian",
  words: {
    home: "خانه",
    events: "رویداد ها",
    aboutUs: "درباره ما",
    contactUs: "تماس با ما",
    language: "زبان"
  }
};
export const english = {
  language: "English",
  words: {
    home: "Home",
    events: "Events",
    aboutUs: "About Us",
    contactUs: "Contact Us",
    language: "Language"
  }
};
export class LanguageProvider extends Component {
  state = persian;
  changeToEnglish = () => {
    this.setState(english);
  };
  changeToPersoan = () => {
    this.setState(persian);
  };
  updateLanguage = e => {
    if (e.target.id === "_changeToPersian") this.changeToPersoan();
    else if (e.target.id === "_changeToEnglish") this.changeToEnglish();
  };
  render() {
    const { children } = this.props;
    return (
      <LanguageContext.Provider
        value={{
          updatedDictionary: this.state,
          updateLanguage: this.updateLanguage
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }
}
