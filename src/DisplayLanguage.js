import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    SELECTED_LANG: "The selected language is: English",
  },
  it: {
    SELECTED_LANG: "La lingua selezionata è: Italiano",
  },
};

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <h1>{Strings[language].SELECTED_LANG} </h1>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
