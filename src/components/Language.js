import React, { Component } from "react";
import LanguageContext from "../contexts/index";
export const Spanish = {
  language: "Español",
  words: {
    home: "Casa",
    events: "Eventos",
    aboutUs: "Acerca de",
    contactUs: "Contáctenos",
    language: "Idioma"
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
  state = Spanish;
  changeToEnglish = () => {
    this.setState(english);
  };
  changeToPersoan = () => {
    this.setState(Spanish);
  };
  updateLanguage = e => {
    if (e.target.id === "_changeToSpanish") this.changeToPersoan();
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
